import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsAlphanumeric()
  firstname?: string;

  @IsAlphanumeric()
  lastname?: string;

  @IsAlphanumeric()
  username?: string;

  @IsEmail()
  email?: string;

  @MinLength(8)
  password?: string;
}
