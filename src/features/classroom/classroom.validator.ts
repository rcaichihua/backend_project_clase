import { Classroom } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

enum Level {
  early,
  primary,
  secondary,
}
export class ClassroomValidator implements Omit<Classroom, 'id'> {
  @IsString()
  grade!: string;

  @IsEnum(Level)
  level!: Level;
}
