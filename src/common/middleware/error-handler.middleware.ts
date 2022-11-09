import { NextFunction, Request, Response } from 'express';
import { AppError } from '../models/error';

export const ErrorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err instanceof AppError ? err.status : 500;
  res
    .status(status)
    .json({ message: err.message, stack: err.stack, name: err.name });
  next(err);
};
