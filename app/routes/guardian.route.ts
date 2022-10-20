import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import {
  createGuardian,
  deleteGuardian,
  getGuardian,
  listGuardian,
  updateGuardian,
} from '../controllers/guardian.controller';
import { GuardianValidator } from '../validators/guardian.validator';

export const guardianRoute = Router();

guardianRoute.get('/', listGuardian);
guardianRoute.get('/:id', getGuardian);
guardianRoute.put('/:id', makeValidateBody(GuardianValidator), updateGuardian);
guardianRoute.post('/', makeValidateBody(GuardianValidator), createGuardian);
guardianRoute.delete('/:id', deleteGuardian);
