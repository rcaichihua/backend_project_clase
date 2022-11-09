import { NextFunction, Request, Response } from 'express';
import { AppError } from '../models/error';
import { TokenService } from '../services/token.service';

const tokenService = new TokenService();

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw new AppError(403, 'Autorización requerida');
  }

  const token = authorization.split('Bearer ')[1];
  const decodedToken = tokenService.verify(token);

  if (!decodedToken) {
    throw new AppError(403, 'Token invalido');
  }

  if (!tokenService.isAccessToken(decodedToken)) {
    throw new AppError(403, 'Tipo de token invalido');
  }

  req.userId = decodedToken.userId;
  return next();
};
