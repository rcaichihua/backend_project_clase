/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { HashService } from '../../common/services/hash.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserValidator } from './user.validator';

const repository = new UserRepository();
const service = new UserService(repository, new HashService());
const controller = new UserController(service);
const validator = makeValidateBody(UserValidator);

export const UserRouter = Router();
UserRouter.get('/', controller.getAll.bind(controller));
UserRouter.get('/:id(\\d+)', controller.getOne.bind(controller));
UserRouter.post('/', validator, controller.create.bind(controller));
UserRouter.put('/:id(\\d+)', validator, controller.update.bind(controller));
UserRouter.delete('/:id(\\d+)', controller.delete.bind(controller));
