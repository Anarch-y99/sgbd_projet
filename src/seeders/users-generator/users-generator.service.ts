import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersGeneratorService {

    generate() {
        return{
            firstname : faker.person.firstName(),
            lastname : faker.person.lastName(),
            username : faker.internet.username(),
            email : faker.internet.email(),
            password : faker.internet.password()
        }
    }
}
