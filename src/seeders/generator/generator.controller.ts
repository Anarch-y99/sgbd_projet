import { Controller, Get, Post } from '@nestjs/common';
import { UsersGeneratorService } from '../users-generator/users-generator.service';

@Controller('generator')
export class GeneratorController {
  constructor(private readonly userGeneratorService: UsersGeneratorService) {}

  @Get('/users')
  users() {
    return this.userGeneratorService.generate();
  }


  
}
