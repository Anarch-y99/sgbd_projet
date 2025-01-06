import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return [];
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return CreateUserDto;
  }
}
