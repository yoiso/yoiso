import { Test, TestingModule } from '@nestjs/testing';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const fastifyAdapter = new FastifyAdapter();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(fastifyAdapter);
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users (GET)', () => {
    return app
      .inject({
        method: 'GET',
        url: '/users',
      })
     .then((result) => {
       expect(result.statusCode).toEqual(200);
     });
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
      .expect(201);
  });

  it('/token (POST) should respond 500 because wrong grant_type', () => {
    return request(app.getHttpServer())
      .post('/token')
      .send({
        grant_type: 'dwi',
        username: 'dwionotan@email.com',
        password: 'asdsdjsj',
        client_id: 'client1',
        client_secret: 'secret'
      })
      .expect(500);
  });

  it('/token (POST) should respond 400 because client doesnt exist', () => {
    return request(app.getHttpServer())
      .post('/token')
      .send({
        grant_type: 'password',
        username: 'dwionotan@email.com',
        password: 'asdsdjsj',
        client_id: 'client1not exist',
        client_secret: 'secret'
      })
      .expect(400);
  });

  it('/token (POST) should respond 400 because user doesnt exist', () => {
    return request(app.getHttpServer())
      .post('/token')
      .send({
        grant_type: 'password',
        username: 'dwionotan@email.com',
        password: 'asdsdjsj',
        client_id: 'client1',
        client_secret: 'secret'
      })
      .expect(400);
  });

  it('/token (POST) success', () => {
    return request(app.getHttpServer())
      .post('/token')
      .send({
        grant_type: 'password',
        username: 'dasdsd@asj.com',
        password: 'asdesssagdfgfg',
        client_id: 'client1',
        client_secret: 'secret'
      })
      .expect(201);
  });
});
