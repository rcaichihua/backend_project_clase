import { ClassroomSubjectStudent } from '@prisma/client';
import { IsNumber } from 'class-validator';

export class ClassroomSubjectStudentValidator
  implements Omit<ClassroomSubjectStudent, 'id'>
{
  @IsNumber()
  classroomSubjectId!: number;

  @IsNumber()
  studentId!: number;
}
