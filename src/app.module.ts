import * as path from 'path';
import { ConfigModule } from 'nestjs-config';
import { Module } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Oauth2Module } from './oauth2/oauth2.module';
import { BalanceModule } from './balance/balance.module';
import { ConfigService } from 'nestjs-config';
import ormconfig = require('./ormconfig');

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    Oauth2Module,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        transport: config.get('app.mailer'),
        template: {
          dir: __dirname + '/email-templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }
      }),
      inject: [ConfigService]
    }),
    BalanceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
