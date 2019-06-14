export class RequestTokenDto {
  readonly grant_type: string;
  readonly username: string;
  readonly password: string;
  readonly client_id: string;
  readonly client_secret: string;
}
