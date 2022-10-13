import { Router } from 'express';
import { listRolUser } from '../controllers/rol-user.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export const rolUserRoutes = Router();

rolUserRoutes.get('/', AuthMiddleware, listRolUser);
