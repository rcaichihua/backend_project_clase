import { Router } from 'express';
import { createGender, getGender, listGender, updateGender } from '../controllers/gender.controller';

export const genderRoute = Router();

genderRoute.get('/', listGender);
genderRoute.get('/:id', getGender)
genderRoute.put('/:id', updateGender)
genderRoute.post('/add', createGender);
