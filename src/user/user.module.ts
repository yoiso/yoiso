import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AccountVerification } from './account-verification.entity';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountVerification, User]), ConfigModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
