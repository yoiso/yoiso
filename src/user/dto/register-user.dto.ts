import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Min } from 'class-validator';

export class RegisterUserDto {

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty()
  @Min(6)
  readonly password: string;

}
