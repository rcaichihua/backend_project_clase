import { Router } from 'express';
import { createShift, deleteShift, getShift, listShift, updateShift } from '../controllers/shift.controller';

export const shiftRoute = Router();

shiftRoute.get('/', listShift);
shiftRoute.get('/:id', getShift)
shiftRoute.put('/:id', updateShift)
shiftRoute.post('/', createShift);
shiftRoute.delete('/:id', deleteShift);
