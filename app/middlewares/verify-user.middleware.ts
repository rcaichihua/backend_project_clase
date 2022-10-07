import { NextFunction, Request, Response } from 'express';
import { AppRequest } from '../interfaces/app-request.interface';
import { UserSequelize } from '../sequelize/user.sequelize';

export const VerifyUserMiddleware = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // recibir correo y contraseña
    const email = req.body.email;
    const password = req.body.password;

    // verificar con base de datos si el usuario existe
    const user = await UserSequelize.findOne({
      where: { email, password },
    });

    if (user) {
      req.user = user;
      return next()
    } else {
      return res.status(400).json({
        message: `El usuario no existe`,
      });
    }

  } catch (exception) {
    res.status(500).json({ message: 'Error en la base de datos', exception });
  }
};
