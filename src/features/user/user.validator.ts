import { User } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsString,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsNumber,
} from 'class-validator';

export class UserValidator implements Omit<User, 'id' | 'password'> {
  @IsString()
  dni!: string;
  @IsString()
  email!: string;
  @IsString()
  firstName!: string;
  @IsString()
  lastName!: string;
  @IsBoolean()
  isSuperuser!: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IsNumber)
  rols!: number[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IsNumber)
  permissions!: number[];
}
