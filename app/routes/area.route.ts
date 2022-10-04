import { Router } from 'express';
import { createArea, deleteArea, getArea, listArea, updateArea } from '../controllers/area.controller';

export const areaRoute = Router();

areaRoute.get('/', listArea);
areaRoute.get('/:id', getArea);
areaRoute.put('/:id', updateArea)
areaRoute.post('/', createArea);
areaRoute.delete('/:id', deleteArea);
