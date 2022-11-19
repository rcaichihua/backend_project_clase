/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { PERMISSION } from '../../common/constants/permission';
import { HasPermissionMiddleware } from '../../common/middleware/has-permission.middleware';
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
UserRouter.get('/', HasPermissionMiddleware(PERMISSION.USER_READ), controller.getAll.bind(controller));
UserRouter.get('/:id(\\d+)', HasPermissionMiddleware(PERMISSION.USER_READ), controller.getOne.bind(controller));
UserRouter.post('/', validator, HasPermissionMiddleware(PERMISSION.USER_CREATE), controller.create.bind(controller));
UserRouter.put('/:id(\\d+)', validator, HasPermissionMiddleware(PERMISSION.USER_UPDATE), controller.update.bind(controller));
UserRouter.delete('/:id(\\d+)', HasPermissionMiddleware(PERMISSION.USER_DELETE), controller.delete.bind(controller));
