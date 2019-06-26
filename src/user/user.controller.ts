import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@ApiUseTags('users')
@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  /**
   * @param {registerUserDto} dto for user registration 
   */
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
