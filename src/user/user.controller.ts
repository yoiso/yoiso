import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ConfigService } from '../config.service';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@ApiUseTags('users')
@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService,
    private readonly config: ConfigService
  ) {}

  @Get()
  getUsers() {
    console.log(this.config.get('TES'));
    return this.userService.findAll();
  }

  @Post()
  async register(@Body() registerUserDto: RegisterUserDto) {
    const user = await this.userService.register(registerUserDto);
    this.userService.sendVerificationEmail(user);
    return user;
  }

  @Get('/emailVerifications')
  async verifyEmail(@Query() query) {
    return this.userService.verifyEmail(query);
  }

}
