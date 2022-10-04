import { Router } from 'express';
import {
  createCriterion,
  deleteCriterion,
  getCriterion,
  listCriterion,
  updateCriterion
} from '../controllers/criterion.controller';

export const criterionRoute = Router();

criterionRoute.get('/', listCriterion);
criterionRoute.get('/:id', getCriterion)
criterionRoute.put('/:id', updateCriterion)
criterionRoute.post('/', createCriterion);
criterionRoute.delete('/:id', deleteCriterion);
