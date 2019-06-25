import { ConfigModule } from 'nestjs-config';
import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Oauth2Module } from './oauth2/oauth2.module';
import { Oauth2Middleware } from './oauth2/oauth2.middleware';
import { ConfigService } from 'nestjs-config';
import { DailyBalanceModule } from './daily-balance/daily-balance.module';
import { MeModule } from './me/me.module';
import * as path from 'path';
import ormconfig = require('./ormconfig');

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    Oauth2Module,
    ConfigModule.load(path.resolve(__dirname, 'config', '**/*.{js,(!d).ts}')),
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
    DailyBalanceModule,
    MeModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Oauth2Middleware)
      .exclude({ path: 'token', method: RequestMethod.POST })
      .forRoutes(
        { path: 'users', method: RequestMethod.ALL },
        { path: 'dailyBalances', method: RequestMethod.ALL },
        { path: 'me', method: RequestMethod.ALL },
      );
  }
}
