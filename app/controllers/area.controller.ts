import { Request, Response } from 'express';
import { AreaSequelize } from '../sequelize/area.sequelize';

export const listArea = async (req: Request, res: Response) => {
  try {
    const areas = await AreaSequelize.findAll();
    return res.json(areas);
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}
