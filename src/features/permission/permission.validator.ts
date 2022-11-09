import { Permission } from '@prisma/client';
import { IsString } from 'class-validator';

export class PermissionValidator implements Omit<Permission, 'id'> {
  @IsString()
  name!: string;
}
