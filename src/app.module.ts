import { Module } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config.module';
import { Oauth2Module } from './oauth2/oauth2.module';
import ormconfig = require('./ormconfig');

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    Oauth2Module,
    ConfigModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtp://e13005a30c883e:9bb0cac88666ea@smtp.mailtrap.io:465/',
        defaults: {
          from: '"yoiso" <no-reply@yoiso.com>'
        },
        template: {
          dir: __dirname + '/email-templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
