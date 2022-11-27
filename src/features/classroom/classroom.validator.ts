import { Classroom } from '@prisma/client';
import { IsString } from 'class-validator';

export class ClassroomValidator implements Omit<Classroom, 'id'> {
  @IsString()
  grade!: string;

  @IsString()
  level!: string;
}
