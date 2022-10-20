import { IsString, IsNumber, IsBoolean, IsDateString } from 'class-validator';
import { Student } from '../interfaces/student.interface';

export class StudentValidator
  implements Omit<Student, 'id' | 'updatedAt' | 'createdAt'>
{
  @IsString()
  dni!: string;

  @IsString()
  lastName!: string;

  @IsString()
  name!: string;

  @IsDateString()
  birthday!: Date;

  @IsBoolean()
  status!: boolean;

  @IsNumber()
  idGender!: number;

  @IsNumber()
  idGuardian!: number;

  @IsNumber()
  idUser!: number;
}
