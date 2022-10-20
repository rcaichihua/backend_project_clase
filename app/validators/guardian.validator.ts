import { IsString, IsNumber } from 'class-validator';
import { Guardian } from '../interfaces/guardian.interface';

export class GuardianValidator
  implements Omit<Guardian, 'id' | 'updatedAt' | 'createdAt'>
{
  @IsString()
  dni!: string;

  @IsString()
  lastName!: string;

  @IsString()
  name!: string;

  @IsString()
  email!: string;

  @IsNumber()
  phone!: number;

  @IsNumber()
  idGender!: number;
}
