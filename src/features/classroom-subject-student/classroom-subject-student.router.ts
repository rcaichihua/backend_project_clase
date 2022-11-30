/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { PERMISSION } from '../../common/constants/permission';
import { HasPermissionMiddleware } from '../../common/middleware/has-permission.middleware';
import { ClassroomSubjectStudentController } from './classroom-subject-student.controller';
import { ClassroomSubjectStudentRepository } from './classroom-subject-student.repository';
import { ClassroomSubjectStudentService } from './classroom-subject-student.service';
import { ClassroomSubjectStudentValidator } from './classroom-subject-student.validator';

const repository = new ClassroomSubjectStudentRepository();
const service = new ClassroomSubjectStudentService(repository);
const controller = new ClassroomSubjectStudentController(service);
const validator = makeValidateBody(ClassroomSubjectStudentValidator);

export const ClassroomSubjectStudentRouter = Router();
ClassroomSubjectStudentRouter.get(
  '/',
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_STUDENT_READ),
  controller.getAll.bind(controller)
);
ClassroomSubjectStudentRouter.get(
  '/:id(\\d+)',
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_STUDENT_READ),
  controller.getOne.bind(controller)
);
ClassroomSubjectStudentRouter.post(
  '/',
  validator,
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_STUDENT_CREATE),
  controller.create.bind(controller)
);
ClassroomSubjectStudentRouter.put(
  '/:id(\\d+)',
  validator,
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_STUDENT_UPDATE),
  controller.update.bind(controller)
);
ClassroomSubjectStudentRouter.delete(
  '/:id(\\d+)',
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_STUDENT_DELETE),
  controller.delete.bind(controller)
);
