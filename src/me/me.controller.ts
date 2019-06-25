import { Controller, Get } from '@nestjs/common';
import { AccessToken } from '../oauth2/access-token.decorator';
import { MeService } from './me.service';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  getMe(@AccessToken() accessToken) {
    return this.meService.getMe(accessToken);
  }
}
