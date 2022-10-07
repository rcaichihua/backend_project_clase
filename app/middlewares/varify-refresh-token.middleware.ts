import { NextFunction, Request, Response } from 'express';
import { TokenHelper, TokenType } from '../helpers/token.helper';
import { AppRequest } from '../interfaces/app-request.interface';
import { UserSequelize } from '../sequelize/user.sequelize';

export const VerifyRefreshTokenMiddleware = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // obtener el refresh token
    const token = req.body.refresh;
    const decoded = TokenHelper.verifyToken(token);

    // si es correcto, verificar si el token enviado es de tipo refresh
    if (decoded.type === TokenType.refresh) {
      const user = await UserSequelize.findByPk(decoded.userId);
      if (user) {
        req.user = user;
        return next();
      } else {
        res.status(400).json({ message: 'El usuario no existe' });
      }
    } else {
      res.status(400).json({ message: 'Tipo de token invalido' });
    }

  } catch (exception) {
    res.status(500).json({ message: 'Token Invalido', exception });
  }
};
