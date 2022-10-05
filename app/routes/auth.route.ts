import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

export const authRoutes = Router();

authRoutes.post('/token', AuthController.token)
authRoutes.post('/token/refresh', AuthController.refresh)