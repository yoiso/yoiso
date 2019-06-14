import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessToken } from './access-token.entity';
import { Client } from './client.entity';
import { User } from '../user/user.entity';

@Injectable()
export class Oauth2Service {

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(AccessToken)
    private readonly accessTokenRepo: Repository<AccessToken>,
    @InjectRepository(Client)
    private readonly clientRepo: Repository<Client>,
  ) {}

  async generateToken() {
    return crypto.randomBytes(24).toString('hex');
  }

  async checkClient(clientId, clientSecret) {
    const isClientValid = await this.clientRepo.findOneOrFail({client_id: clientId, client_secret: clientSecret});
    return isClientValid;
  }

  async checkUser(username, password) {
    const user = await this.userRepo.findOneOrFail({email: username});
    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (isPasswordMatch) {
      return user;
    }
  }

  async saveToken(token, userId) {
    const accessToken = new AccessToken();
    accessToken.access_token = token;
    accessToken.user_id = userId;
    await this.accessTokenRepo.save(accessToken);
  }

  async isHasToken(userId) {
    const token = await this.accessTokenRepo.findOne({user_id: userId});

    if (token) {
      return token.access_token;
    }

    return token;
  }

  async revoke(token) {
    return await this.accessTokenRepo.delete({ access_token: token });
  }
}
