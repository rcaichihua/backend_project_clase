import { Response } from 'express';
import { TokenHelper } from '../helpers/token.helper';
import { AppRequest } from '../interfaces/app-request.interface';

const token = async (req: AppRequest, res: Response) => {
  const userId = req.user?.id;
  const name = req.user?.name;
  // si existe el usuario generamos un token
  const access = TokenHelper.generateAccessToken({
    userId,
    name,
  });
  const refresh = TokenHelper.generateRefreshToken({ userId });
  return res.json({ access, refresh });
};

const refresh = async (req: AppRequest, res: Response) => {
  // si es correcto, generar un nuevo access token
  const access = TokenHelper.generateAccessToken({
    userId: req.user?.id,
    name: req.user?.name,
  });
  res.json({ access });
};

export const AuthController = {
  token,
  refresh,
};
