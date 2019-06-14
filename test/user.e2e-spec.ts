import { Test, TestingModule } from '@nestjs/testing';
import { ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200);
  });

  it('/users (POST) should respond 400 because wrong email format', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({name: 'dwi', email: 'dwionotan email', password: 'asdsdjsj'})
      .expect(400);
  });

  it('/users (POST) should respond 400 because password length is not long enough', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({name: 'dwi', email: 'dwionotan@email.com', password: 'asds'})
      .expect(400);
  });

  it('/users (POST) success', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({name: 'dwi purnomo', email: 'dwionotan@email.com', password: 'asdsasdasd'})
      .expect(400);
  });
});
