import { ClassroomSubjectTeacher } from '@prisma/client';
import { IsNumber } from 'class-validator';

export class ClassroomSubjectTeacherValidator
  implements Omit<ClassroomSubjectTeacher, 'id'>
{
  @IsNumber()
  classroomSubjectId!: number;

  @IsNumber()
  teacherId!: number;
}
