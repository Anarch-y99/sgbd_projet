import { Module } from '@nestjs/common';
import { UsersGeneratorService } from './users-generator/users-generator.service';
import { GeneratorController } from './generator/generator.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [UsersGeneratorService],
  controllers: [GeneratorController],
  imports: [UsersModule]
})
export class SeedersModule {}
