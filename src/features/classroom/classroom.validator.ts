import { Classroom } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

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

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IsNumber)
  subjectIds!: number[];
}
