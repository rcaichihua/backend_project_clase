import { ClassroomSubject } from '@prisma/client';
import { IsString } from 'class-validator';

export class ClassroomSubjectValidator implements Omit<ClassroomSubject, 'id'> {
  @IsString()
  classroomId!: number;
  
  @IsString()
  subjectId!: number;
}
