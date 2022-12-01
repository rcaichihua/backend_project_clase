/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { PERMISSION } from '../../common/constants/permission';
import { HasPermissionMiddleware } from '../../common/middleware/has-permission.middleware';
import { AttendanceController } from './attendance.controller';
import { AttendanceRepository } from './attendance.repository';
import { AttendanceService } from './attendance.service';
import { AttendanceValidator } from './attendance.validator';

const repository = new AttendanceRepository();
const service = new AttendanceService(repository);
const controller = new AttendanceController(service);
const validator = makeValidateBody(AttendanceValidator);

export const AttendanceRouter = Router();
AttendanceRouter.get('/', HasPermissionMiddleware(PERMISSION.STUDENT_READ), controller.getAll.bind(controller));
AttendanceRouter.get('/:id(\\d+)', HasPermissionMiddleware(PERMISSION.STUDENT_READ), controller.getOne.bind(controller));
AttendanceRouter.post('/', validator, HasPermissionMiddleware(PERMISSION.STUDENT_CREATE), controller.create.bind(controller));
AttendanceRouter.put('/:id(\\d+)', validator, HasPermissionMiddleware(PERMISSION.STUDENT_UPDATE), controller.update.bind(controller));
AttendanceRouter.delete('/:id(\\d+)', HasPermissionMiddleware(PERMISSION.STUDENT_DELETE), controller.delete.bind(controller));
