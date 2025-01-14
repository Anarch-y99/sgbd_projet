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

  async generateAndSave() {
    const number = 100;
    for (let i = 0; i < number; i++) {
      const user = this.generate();
      try {
        await this.usersService.create(user); // Appelle la méthode de création du service
      } catch (error) {
        throw new Error(`Failed to save user: ${error.message}`);
      }
    }
    return `Generated and saved ${number} users`;
  }
}


