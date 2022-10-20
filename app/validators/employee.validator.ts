import { IsString, IsNumber, IsBoolean, IsDateString } from 'class-validator';
import { Employee } from '../interfaces/employee.interface';

export class EmployeeValidator
  implements Omit<Employee, 'id' | 'updatedAt' | 'createdAt'>
{
  @IsString()
  dni!: string;

  @IsString()
  lastName!: string;

  @IsString()
  name!: string;

  @IsDateString()
  birthday!: Date;

  @IsString()
  email!: string;

  @IsString()
  phone!: string;

  @IsBoolean()
  status!: boolean;

  @IsNumber()
  idUser!: number;
}
