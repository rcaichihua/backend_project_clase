/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { HashService } from '../../common/services/hash.service';
import { TokenService } from '../../common/services/token.service';
import { UserRepository } from '../user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthTokenValidator } from './auth.validator';
import { RefreshAuthMiddleware } from '../../common/middleware/refresh-auth.middleware';

const userRepository = new UserRepository();
const service = new AuthService(
  userRepository,
  new HashService(),
  new TokenService()
);
const controller = new AuthController(service);

export const AuthRouter = Router();
AuthRouter.post(
  '/token',
  makeValidateBody(AuthTokenValidator),
  controller.token.bind(controller)
);
AuthRouter.post(
  '/token/refresh',
  RefreshAuthMiddleware,
  controller.refreshToken.bind(controller)
);
