import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { body } from 'express-validator';
import { ValidatorMiddleware } from '../middlewares/validator.middleware';
import { VerifyUserMiddleware } from '../middlewares/verify-user.middleware';
import { VerifyRefreshTokenMiddleware } from '../middlewares/varify-refresh-token.middleware';

export const authRoutes = Router();

authRoutes.post(
  '/token',
  body('email').isEmail(),
  body('password').isString(),
  ValidatorMiddleware,
  VerifyUserMiddleware,
  AuthController.token
);

authRoutes.post(
  '/token/refresh',
  body('refresh').isString(),
  ValidatorMiddleware,
  VerifyRefreshTokenMiddleware,
  AuthController.refresh
);
