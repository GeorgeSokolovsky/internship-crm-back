import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly name: string;

  @MinLength(6)
  readonly password: string;
}
