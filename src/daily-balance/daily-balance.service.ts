import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { DailyBalance } from './daily-balance.entity';

@Injectable()
export class DailyBalanceService {

  constructor(
    @InjectRepository(DailyBalance)
    private readonly dailyBalanceRepo: Repository<DailyBalance>
  ) {}

  create(dto, user): Promise<DailyBalance> {
    const dailyBalance: DailyBalance = dto;
    dailyBalance.user = user;
    return this.dailyBalanceRepo.save(dailyBalance);
  }
}
