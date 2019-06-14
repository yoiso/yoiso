import { Controller, Post, Delete, Body, Res, Headers } from '@nestjs/common';
import { RequestTokenDto } from './dto/request-token.dto';
import { Oauth2Service } from './oauth2.service';

@Controller('token')
export class PasswordController {

  constructor(private readonly oauth2Service: Oauth2Service) {}

  @Delete()
  async revokeToken(@Headers() headers) {
    const token = headers.authorization.split(' ')[1];
    return await this.oauth2Service.revoke(token);
  }

  @Post()
  async requestToken(@Body() reqTokenDto: RequestTokenDto, @Res() res) {
    const grantType = reqTokenDto.grant_type;

    switch (grantType) {
      case 'password':
        await this.passwordGrant(reqTokenDto, res);
        break;
    }

    res.code(500).send({error: 'Ada masalah.'});
  }

  async passwordGrant(reqTokenDto: RequestTokenDto, res) {
    try {
      const client = await this.oauth2Service.checkClient(reqTokenDto.client_id, reqTokenDto.client_secret);
      const user = await this.oauth2Service.checkUser(reqTokenDto.username, reqTokenDto.password);
      let token = await this.oauth2Service.isHasToken(user.id);

      if ((client && user) && !token) {
        token = await this.oauth2Service.generateToken();
        await this.oauth2Service.saveToken(token, user.id);
      }

      res.code(201).send({token});
    } catch(e) {
      res.code(400).send({error: e.message});
    }
  }
}
