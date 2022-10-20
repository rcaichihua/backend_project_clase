import { IsNumber, IsBoolean } from 'class-validator';
import { Course } from '../interfaces/course.interface';

export class CourseValidator
  implements Omit<Course, 'id' | 'updatedAt' | 'createdAt'>
{
  @IsNumber()
  year!: number;

  @IsBoolean()
  status!: boolean;

  @IsNumber()
  idEmployee!: number;

  @IsNumber()
  idCriterion!: number;

  @IsNumber()
  idGrade!: number;
}
