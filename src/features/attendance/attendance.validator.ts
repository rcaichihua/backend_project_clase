import { Attendance, AttendanceDetail } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  ValidateNested,
  IsNumber,
  IsDateString,
  IsEnum,
} from 'class-validator';

export enum AttendanceStatus {
  present = 'P',
  absent = 'A',
  late = 'L',
}

export class AttendanceDetailValidator
  implements Omit<AttendanceDetail, 'id' | 'attendanceId'>
{
  @IsNumber()
  studentId!: number;

  @IsEnum(AttendanceStatus)
  status!: string;
}

export class AttendanceValidator implements Omit<Attendance, 'id'> {
  @IsDateString()
  date!: Date;

  @IsNumber()
  classroomSubjectId!: number;

  @IsNumber()
  teacherId!: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttendanceDetailValidator)
  details!: Omit<AttendanceDetail, 'id' | 'attendanceId'>[];
}
