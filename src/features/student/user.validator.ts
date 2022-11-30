import { Student } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';

export class UserValidator implements Omit<Student, 'id'> {
  @IsString()
  dni!: string;
  @IsString()
  firstName!: string;
  @IsString()
  lastName!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IsNumber)
  classroomSubjectIds!: number[];
}
