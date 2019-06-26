import { ApiModelProperty } from '@nestjs/swagger';

export class RequestTokenDto {

  @ApiModelProperty()
  readonly grant_type: string;

  @ApiModelProperty()
  readonly username: string;

  @ApiModelProperty()
  readonly password: string;

  @ApiModelProperty()
  readonly client_id: string;

  @ApiModelProperty()
  readonly client_secret: string;
}
