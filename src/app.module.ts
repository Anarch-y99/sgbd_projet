import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedersModule } from './seeders/seeders.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    /*MongooseModule.forRoot('mongodb://root:root@localhost:27017/sgbd', {
      authSource: 'admin',
    }),*/
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: `mongodb://${configService.get('MONGO_DB_USER')}:${configService.get('MONGO_DB_PASSWORD')}@${configService.get('MONGO_DB_HOST')}:${configService.get('MONGO_DB_PORT')}/${configService.get('MONGO_DB_NAME')}`,
          authSource: 'admin',
        };
      },
    }),
    SeedersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
