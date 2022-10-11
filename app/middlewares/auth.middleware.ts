import { NextFunction, Response } from 'express';
import { TokenHelper, TokenType } from '../helpers/token.helper';
import { AppRequest } from '../interfaces/app-request.interface';
import { UserSequelize } from '../sequelize/user.sequelize';

export const AuthMiddleware = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (authorization) {
      const token = authorization.split('Bearer ')[1];
      const decodedToken = TokenHelper.verifyToken(token);
      if (decodedToken.type === TokenType.access) {
        const user = await UserSequelize.findByPk(decodedToken.userId);
        if (user) {
          req.user = user;
          return next();
        } else {
          res.status(400).json({ message: 'El usuario no existe' });
        }
      }
      res.status(401).json({ message: 'Tipo de token invalido' });
    }

    res.status(401).json({ message: 'Autorización requerida' });
  } catch (exception) {
    res.status(500).json({ message: 'Token Invalido', exception });
  }
};
