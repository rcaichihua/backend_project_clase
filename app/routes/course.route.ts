import { Router } from 'express';
import { makeValidateBody } from 'express-class-validator';
import {
  createCourse,
  deleteCourse,
  getCourse,
  listCourse,
  updateCourse,
} from '../controllers/course.controller';
import { CourseValidator } from '../validators/course.validator';

export const courseRoute = Router();

courseRoute.get('/', listCourse);
courseRoute.get('/:id', getCourse);
courseRoute.put('/:id', makeValidateBody(CourseValidator), updateCourse);
courseRoute.post('/', makeValidateBody(CourseValidator), createCourse);
courseRoute.delete('/:id', deleteCourse);
