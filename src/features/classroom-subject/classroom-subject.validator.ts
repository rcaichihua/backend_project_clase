import { ClassroomSubject } from '@prisma/client';
import { IsNumber } from 'class-validator';

export class ClassroomSubjectValidator implements Omit<ClassroomSubject, 'id'> {
  @IsNumber()
  classroomId!: number;

  @IsNumber()
  subjectId!: number;
}
