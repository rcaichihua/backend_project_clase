import { NextFunction, Request, Response } from 'express';
import { TokenHelper, TokenType } from '../helpers/token.helper';

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (authorization) {
      const token = authorization.split('Bearer ')[1];
      const decodedToken = TokenHelper.verifyToken(token);
      if (decodedToken.type === TokenType.access) {
        return next();
      }
      res.status(401).json({ message: 'Tipo de token invalido' });
    }

    res.status(401).json({ message: 'Autorización requerida' });
  } catch (exception) {
    res.status(500).json({ message: 'Token Invalido', exception });
  }
};
