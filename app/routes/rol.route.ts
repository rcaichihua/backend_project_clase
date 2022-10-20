import { Router } from 'express';
import { getRol, listRol, updateRol } from '../controllers/rol.controller';

export const rolRoutes = Router();

rolRoutes.get('/', listRol);
rolRoutes.get('/:id', getRol);
rolRoutes.put('/:id', updateRol);
