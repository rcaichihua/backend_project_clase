import { Router } from 'express';
import { listArea } from '../controllers/area.controller';

export const areaRoute = Router();

areaRoute.get('/', listArea);
