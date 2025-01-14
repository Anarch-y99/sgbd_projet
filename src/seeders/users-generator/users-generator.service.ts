import { Injectable, Post } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UsersGeneratorService {
  constructor(private readonly usersService: UsersService) {}

  generate() {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

  
}


