/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { RolController } from './rol.controller';
import { RolRepository } from './rol.repository';
import { RolService } from './rol.service';
import { RolValidator } from './rol.validator';

const repository = new RolRepository();
const service = new RolService(repository);
const controller = new RolController(service);
const validator = makeValidateBody(RolValidator);

export const RolRouter = Router();
RolRouter.get('/', controller.getAll.bind(controller));
RolRouter.get('/:id(\\d+)', controller.getOne.bind(controller));
RolRouter.post('/', validator, controller.create.bind(controller));
RolRouter.put('/:id(\\d+)', validator, controller.update.bind(controller));
RolRouter.delete('/:id(\\d+)', controller.delete.bind(controller));
