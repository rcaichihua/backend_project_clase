import { Request, Response } from 'express';
import { UserSequelize } from '../sequelize/user.sequelize';

export const listUser = async (req: Request, res: Response) => {
  try {
    const users = await UserSequelize.findAll();
    return res.json(users);
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error'
    })
  }
}
