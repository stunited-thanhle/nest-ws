import { Expose } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @Expose()
  username: string;

  @IsEmail()
  @Expose()
  email: string;

  @IsNumber()
  phone: number;

  createdAt: Date;

  id: number;
}
