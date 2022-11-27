/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { ClassroomController } from './classroom.controller';
import { ClassroomRepository } from './classroom.repository';
import { ClassroomService } from './classroom.service';
import { ClassroomValidator } from './classroom.validator';

const repository = new ClassroomRepository();
const service = new ClassroomService(repository);
const controller = new ClassroomController(service);
const validator = makeValidateBody(ClassroomValidator);

export const ClassroomRouter = Router();
ClassroomRouter.get('/', controller.getAll.bind(controller));
ClassroomRouter.get('/:id(\\d+)', controller.getOne.bind(controller));
ClassroomRouter.post('/', validator, controller.create.bind(controller));
ClassroomRouter.put('/:id(\\d+)', validator, controller.update.bind(controller));
ClassroomRouter.delete('/:id(\\d+)', controller.delete.bind(controller));
