import { Response } from 'express';
import { AppRequest } from '../interfaces/app-request.interface';
import { RolUserSequelize } from '../sequelize/rol-user.sequelize';
import { RolSequelize } from '../sequelize/rol.sequelize';

export const listRolUser = async (req: AppRequest, res: Response) => {
  try {
    const roles = await RolUserSequelize.findAll({
      attributes: {
        exclude: ['idRol', 'createdAt', 'updatedAt'],
      },
      where: {
        idUser: req.user?.id,
      },
      include: RolSequelize,
    });
    return res.json(roles);
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};
