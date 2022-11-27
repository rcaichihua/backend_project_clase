import { Subject } from '@prisma/client';
import { IsString } from 'class-validator';

export class SubjectValidator implements Omit<Subject, 'id'> {
  @IsString()
  name!: string;
}
