import { Router } from 'express';
import { listUser } from '../controllers/user.controller';

export const userRoutes = Router();

userRoutes.get('/', listUser);
