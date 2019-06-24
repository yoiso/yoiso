import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyBalanceController } from './daily-balance.controller';
import { DailyBalanceService } from './daily-balance.service';
import { DailyBalance } from './daily-balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DailyBalance])],
  controllers: [DailyBalanceController],
  providers: [DailyBalanceService]
})
export class DailyBalanceModule {}
