/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { ClassroomSubjectController } from './classroom-subject.controller';
import { ClassroomSubjectRepository } from './classroom-subject.repository';
import { ClassroomSubjectService } from './classroom-subject.service';
import { ClassroomSubjectValidator } from './classroom-subject.validator';

const repository = new ClassroomSubjectRepository();
const service = new ClassroomSubjectService(repository);
const controller = new ClassroomSubjectController(service);
const validator = makeValidateBody(ClassroomSubjectValidator);

export const ClassroomSubjectRouter = Router();
ClassroomSubjectRouter.get('/', controller.getAll.bind(controller));
ClassroomSubjectRouter.get('/:id(\\d+)', controller.getOne.bind(controller));
ClassroomSubjectRouter.post('/', validator, controller.create.bind(controller));
ClassroomSubjectRouter.put('/:id(\\d+)', validator, controller.update.bind(controller));
ClassroomSubjectRouter.delete('/:id(\\d+)', controller.delete.bind(controller));
