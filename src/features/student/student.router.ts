/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { PERMISSION } from '../../common/constants/permission';
import { HasPermissionMiddleware } from '../../common/middleware/has-permission.middleware';
import { StudentController } from './student.controller';
import { StudentRepository } from './student.repository';
import { StudentService } from './student.service';
import { UserValidator } from './student.validator';

const repository = new StudentRepository();
const service = new StudentService(repository);
const controller = new StudentController(service);
const validator = makeValidateBody(UserValidator);

export const StudentRouter = Router();
StudentRouter.get('/', HasPermissionMiddleware(PERMISSION.STUDENT_READ), controller.getAll.bind(controller));
StudentRouter.get('/:id(\\d+)', HasPermissionMiddleware(PERMISSION.STUDENT_READ), controller.getOne.bind(controller));
StudentRouter.post('/', validator, HasPermissionMiddleware(PERMISSION.STUDENT_CREATE), controller.create.bind(controller));
StudentRouter.put('/:id(\\d+)', validator, HasPermissionMiddleware(PERMISSION.STUDENT_UPDATE), controller.update.bind(controller));
StudentRouter.delete('/:id(\\d+)', HasPermissionMiddleware(PERMISSION.STUDENT_DELETE), controller.delete.bind(controller));
