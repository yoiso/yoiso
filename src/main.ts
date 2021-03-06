import 'reflect-metadata';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from 'nestjs-config';
import { AppModule } from './app.module';

function getConfig() {
  return (ConfigService as any).loadConfigSync(
    path.join(__dirname, './config/!(*.d).{ts,js}'),
  );
}

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('yoiso')
    .setDescription('Yoiso API')
    .setVersion('1.0')
    .addTag('v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors({origin: '*'});
  app.setGlobalPrefix('v1');

  const config = getConfig();
  await app.listen(config.app.port);
}
bootstrap();
