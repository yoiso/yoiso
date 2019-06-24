import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, Length, IsNotEmpty } from 'class-validator';
import { BalanceType } from '../daily-balance.entity';

export class CreateDailyBalanceDto {

  @ApiModelProperty()
  @IsDefined()
  @IsNotEmpty()
  @Length(1)
  readonly account: string;

  @ApiModelProperty()
  @IsDefined()
  @IsNotEmpty()
  @Length(1)
  readonly amount: string;

  @ApiModelProperty()
  @IsEnum(BalanceType)
  readonly type: string;

}
