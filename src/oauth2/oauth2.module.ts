import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PasswordController } from './password.controller';
import { Oauth2Service } from './oauth2.service';

import { AccessToken } from './access-token.entity';
import { User } from '../user/user.entity';
import { Client } from './client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, AccessToken, Client])],
  controllers: [PasswordController],
  providers: [Oauth2Service]
})
export class Oauth2Module {}
