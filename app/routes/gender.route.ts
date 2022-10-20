import { Router } from 'express';
import {
  createGender,
  deleteGender,
  getGender,
  listGender,
  updateGender,
} from '../controllers/gender.controller';

export const genderRoute = Router();

genderRoute.get('/', listGender);
genderRoute.get('/:id', getGender);
genderRoute.put('/:id', updateGender);
genderRoute.post('/', createGender);
genderRoute.delete('/:id', deleteGender);
