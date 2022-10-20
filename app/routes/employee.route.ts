import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import {
  createStudent,
  deleteStudent,
  getStudent,
  listStudent,
  updateStudent,
} from '../controllers/student.controller';
import { EmployeeValidator } from '../validators/employee.validator';

export const employeeRoute = Router();

employeeRoute.get('/', listStudent);
employeeRoute.get('/:id', getStudent);
employeeRoute.put('/:id', makeValidateBody(EmployeeValidator), updateStudent);
employeeRoute.post('/', makeValidateBody(EmployeeValidator), createStudent);
employeeRoute.delete('/:id', deleteStudent);
