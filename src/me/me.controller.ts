import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AccessToken } from '../oauth2/access-token.decorator';
import { MeService } from './me.service';

@ApiUseTags('me')
@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  getMe(@AccessToken() accessToken) {
    return this.meService.getMe(accessToken);
  }
}
