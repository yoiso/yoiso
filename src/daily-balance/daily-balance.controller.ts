import { Controller, Post, Body, Req, Get, Query } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { DailyBalanceService } from './daily-balance.service';
import { CreateDailyBalanceDto } from './dto/create-daily-balance.dto';
import { AccessToken } from '../oauth2/access-token.decorator';

@ApiUseTags('dailyBalances')
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

  @Get()
  getByToken(@AccessToken() accessToken, @Query() query) {
    if (Object.hasOwnProperty.bind(query)('date')) {
      const user = accessToken.user;
      const date = query.date;
      return this.dailyBalanceService.getByDateForLoggedInUser(user, date);
    }
    return this.dailyBalanceService.getByToken(accessToken);
  }
}
