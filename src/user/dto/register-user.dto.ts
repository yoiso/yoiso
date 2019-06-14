import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class RegisterUserDto {

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty()
  @Length(6)
  readonly password: string;

}
