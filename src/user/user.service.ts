import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nest-modules/mailer';
import { ConfigService } from 'nestjs-config';
import { User } from './user.entity';
import { AccountVerification } from './account-verification.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(AccountVerification)
    private readonly accountRepository: Repository<AccountVerification>,
    private readonly mailerService: MailerService,
    public config: ConfigService
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  register(user): Promise<User> {
    const newUser = new User();
    Object.assign(newUser, user);

    return this.userRepository.save(newUser);
  }

  async sendVerificationEmail(user) {

    const account = new AccountVerification();
    account.user = user;
    const newAccountCode = await this.accountRepository.save(account);

    return this.mailerService
      .sendMail({
        to: user.email,
        from: 'yosio system <noreply@yosio.com>',
        subject: 'Verifikasikan email Anda',
        template: 'account-verification',
        context: {
          code: newAccountCode.code,
          username: user.name,
        }
      }).then((response) => {
        console.log(response);
      }).catch((errors) => {
        console.log(errors);
      })
  }

  async verifyEmail(query) {
    const account = await this.accountRepository.findOneOrFail({ code: query.code }, { relations: ['user'] });
    account.user.isVerified = !account.user.isVerified;
    this.userRepository.save(account.user);
    this.accountRepository.delete(account);
    return {message: 'success'};
  }
}
