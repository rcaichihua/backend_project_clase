/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { PERMISSION } from '../../common/constants/permission';
import { HasPermissionMiddleware } from '../../common/middleware/has-permission.middleware';
import { ClassroomSubjectTeacherController } from './classroom-subject-teacher.controller';
import { ClassroomSubjectTeacherRepository } from './classroom-subject-teacher.repository';
import { ClassroomSubjectTeacherService } from './classroom-subject-teacher.service';
import { ClassroomSubjectTeacherValidator } from './classroom-subject-teacher.validator';

const repository = new ClassroomSubjectTeacherRepository();
const service = new ClassroomSubjectTeacherService(repository);
const controller = new ClassroomSubjectTeacherController(service);
const validator = makeValidateBody(ClassroomSubjectTeacherValidator);

export const ClassroomSubjectTeacherRouter = Router();
ClassroomSubjectTeacherRouter.get(
  '/',
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_TEACHER_READ),
  controller.getAll.bind(controller)
);
ClassroomSubjectTeacherRouter.get(
  '/:id(\\d+)',
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_TEACHER_READ),
  controller.getOne.bind(controller)
);
ClassroomSubjectTeacherRouter.post(
  '/',
  validator,
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_TEACHER_CREATE),
  controller.create.bind(controller)
);
ClassroomSubjectTeacherRouter.put(
  '/:id(\\d+)',
  validator,
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_TEACHER_UPDATE),
  controller.update.bind(controller)
);
ClassroomSubjectTeacherRouter.delete(
  '/:id(\\d+)',
  HasPermissionMiddleware(PERMISSION.CLASSROOM_SUBJECT_TEACHER_DELETE),
  controller.delete.bind(controller)
);
