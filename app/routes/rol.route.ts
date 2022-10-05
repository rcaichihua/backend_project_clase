import { Router } from 'express';
import { getRol, listRol, updateRol } from '../controllers/rol.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';

export const rolRoutes = Router();

rolRoutes.get('/', AuthMiddleware, listRol);
rolRoutes.get('/:id', getRol);
rolRoutes.put('/:id', updateRol);
