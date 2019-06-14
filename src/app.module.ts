import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Oauth2Module } from './oauth2/oauth2.module';
import ormconfig = require('./ormconfig');

console.log(ormconfig);

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, Oauth2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
