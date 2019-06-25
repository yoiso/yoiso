import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeController } from './me.controller';
import { MeService } from './me.service';
import { DailyBalance } from '../daily-balance/daily-balance.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DailyBalance])],
  controllers: [MeController],
  providers: [MeService]
})
export class MeModule {}
