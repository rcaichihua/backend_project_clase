import { Router } from 'express';
import { createGrade, deleteGrade, getGrade, listGrade, updateGrade } from '../controllers/grade.controller';

export const gradeRoute = Router();

gradeRoute.get('/', listGrade);
gradeRoute.get('/:id', getGrade)
gradeRoute.put('/:id', updateGrade)
gradeRoute.post('/', createGrade);
gradeRoute.delete('/:id', deleteGrade);
