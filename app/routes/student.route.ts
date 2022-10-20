import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import {
  createStudent,
  deleteStudent,
  getStudent,
  listStudent,
  updateStudent,
} from '../controllers/student.controller';
import { StudentValidator } from '../validators/student.validator';

export const studentRoute = Router();

studentRoute.get('/', listStudent);
studentRoute.get('/:id', getStudent);
studentRoute.put('/:id', makeValidateBody(StudentValidator), updateStudent);
studentRoute.post('/', makeValidateBody(StudentValidator), createStudent);
studentRoute.delete('/:id', deleteStudent);
