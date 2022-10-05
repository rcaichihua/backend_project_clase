import { Request, Response } from 'express';
import { TokenHelper, TokenType } from '../helpers/token.helper';
import { TokenPayload } from '../interfaces/token-payload.interface';
import { UserSequelize } from '../sequelize/user.sequelize';

const token = async (req: Request, res: Response) => {
  // recibir correo y contraseña
  const email = req.body.email;
  const password = req.body.password;

  // verificar con base de datos si el usuario existe
  try {
    const user = await UserSequelize.findOne({
      where: { name: email, password },
    });

    // si existe el usuario generamos un token
    if (user) {
      const access = TokenHelper.generateAccessToken({
        userId: user.id,
        name: user.name,
      });
      const refresh = TokenHelper.generateRefreshToken({ userId: user.id });
      return res.json({ access, refresh });
    }

    // si no existe el usuario retornamos un error
    return res.status(400).json({
      message: `El usuario no existe`,
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

const refresh = async (req: Request, res: Response) => {
  // obtener el refresh token
  const token = req.body.refresh;

  // verificar el token
  try {
    const decoded = TokenHelper.verifyToken(token);

    // si es correcto, verificar si el token enviado es de tipo refresh
    if (decoded.type === TokenType.refresh) {
      // si es correcto, generar un nuevo access token
      const user = await UserSequelize.findByPk(decoded.userId);

      if (user) {
        const access = TokenHelper.generateAccessToken({
          userId: user.id,
          name: user.name,
        });
        res.json({ access });
      }

      res.status(404).json({ message: 'El usuario no existe' });
    }

    res.status(400).json({ message: 'Tipo de token invalido' });
  } catch (e) {
    res.status(500).json({ message: 'Token invalido' });
  }
};

export const AuthController = {
  token,
  refresh,
};
