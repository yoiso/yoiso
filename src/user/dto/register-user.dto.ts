import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, Length } from 'class-validator';

export class RegisterUserDto {

  @ApiModelProperty()
  @IsDefined()
  @Length(1)
  readonly name!: string;

  @ApiModelProperty()
  @IsEmail()
  readonly email!: string;

  @ApiModelProperty()
  @Length(6)
  readonly password!: string;

}
