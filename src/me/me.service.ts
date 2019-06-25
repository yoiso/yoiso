import { Injectable } from '@nestjs/common';
import { Connection, EntityManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyBalance } from '../daily-balance/daily-balance.entity'

@Injectable()
export class MeService {

  constructor(
    @InjectRepository(DailyBalance)
    private readonly dailyBalanceRepo: Repository<DailyBalance>) {}

  async getMe(token) {
    const { accessToken, user } = token;
    const dailyBalance = await this.dailyBalanceRepo.find({ user: user});
    return { accessToken, user, dailyBalance };
  }
}
