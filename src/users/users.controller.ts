import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.find();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.create(CreateUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateUserDto: CreateUserDto) {
    return this.usersService.update(id, CreateUserDto);
  }
}
