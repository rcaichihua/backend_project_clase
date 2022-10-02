import { Request, Response } from 'express';
import { RolSequelize } from '../sequelize/rol.sequelize';

export const listRol = async (req: Request, res: Response) => {
  try {
    const rol = await RolSequelize.findAll();
    return res.json(rol);
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}

export const getRol = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const rol = await RolSequelize.findByPk(id);

    if (rol) {
      return res.json(rol);
    }

    return res.json({
      message: `El cliente no existe`
    })
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}

export const updateRol = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;

    const rol = await RolSequelize.findByPk(id);

    if (rol) {
      await rol.update({name, description});

      return res.json({
        message: `Se actualizó el rol ${name} con éxito`
      })
    }

  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}
