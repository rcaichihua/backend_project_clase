/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { SubjectController } from './subject.controller';
import { SubjectRepository } from './subject.repository';
import { SubjectService } from './subject.service';
import { SubjectValidator } from './subject.validator';

const repository = new SubjectRepository();
const service = new SubjectService(repository);
const controller = new SubjectController(service);
const validator = makeValidateBody(SubjectValidator);

export const SubjectRouter = Router();
SubjectRouter.get('/', controller.getAll.bind(controller));
SubjectRouter.get('/:id(\\d+)', controller.getOne.bind(controller));
SubjectRouter.post('/', validator, controller.create.bind(controller));
SubjectRouter.put('/:id(\\d+)', validator, controller.update.bind(controller));
SubjectRouter.delete('/:id(\\d+)', controller.delete.bind(controller));
