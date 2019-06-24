import { Controller, Post, Body, Req } from '@nestjs/common';
import { DailyBalanceService } from './daily-balance.service';
import { CreateDailyBalanceDto } from './dto/create-daily-balance.dto';
import { AccessToken } from '../oauth2/access-token.decorator';

@Controller('dailyBalances')
export class DailyBalanceController {

  constructor(
    private readonly dailyBalanceService: DailyBalanceService
  ) {}

  @Post()
  createDailyBalance(
    @Body() createDailyBalanceDto: CreateDailyBalanceDto,
    @Req() req,
    @AccessToken() accessToken,
  ) {
    const user = accessToken.user;
    return this.dailyBalanceService.create(createDailyBalanceDto, user);
  }
}
