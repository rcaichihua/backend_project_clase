import { Rol } from '@prisma/client';
import { IsString, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class RolValidator implements Omit<Rol, 'id'> {
  @IsString()
  name!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IsNumber)
  permissions!: number[];
}
