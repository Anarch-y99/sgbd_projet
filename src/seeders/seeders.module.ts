import { Module } from '@nestjs/common';
import { UsersGeneratorService } from './users-generator/users-generator.service';
import { GeneratorController } from './generator/generator.controller';

@Module({
  providers: [UsersGeneratorService],
  controllers: [GeneratorController]
})
export class SeedersModule {}
