import { Request, Response } from 'express';
import { RolSequelize } from '../sequelize/rol.sequelize';

export const listRol = async (req: Request, res: Response) => {
  try {
    const roles = await RolSequelize.findAll();
    return res.json(roles);
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
      message: `El rol no existe`
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

    if (rol && (name || description)) {
      await rol.update({name, description});

      return res.json({
        message: `Se actualizó el rol ${name} con éxito`
      });
    }

    return res.json({
      message: 'No se encontro datos que actualizar'
    });

  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}
