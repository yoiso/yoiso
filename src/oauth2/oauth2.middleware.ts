import { ServerResponse } from 'http';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { AccessToken } from './access-token.entity';

@Injectable()
export class Oauth2Middleware implements NestMiddleware {
  async use(req, res: ServerResponse, next) {
    const token = req.headers.authorization.split(' ')[1];
    const accRepo = getRepository(AccessToken);
    const accessToken = await accRepo.findOne({access_token: token}, {relations: ['user']});

    if (!accessToken) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 401;
      res.statusMessage = 'Unauthorized';
      res.end(JSON.stringify({message: 'Unauthorized.'}));
    }

    req.accessToken = accessToken;
    next();
  }
}
