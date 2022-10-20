import { Request, Response } from 'express';
import { AreaSequelize } from '../sequelize/area.sequelize';

export const listArea = async (req: Request, res: Response) => {
  try {
    const areas = await AreaSequelize.findAll();
    return res.json(areas);
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getArea = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const area = await AreaSequelize.findByPk(id);

    if (area) {
      return res.json(area);
    }

    return res.status(400).json({
      message: `El área no existe`,
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const createArea = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    if (name) {
      const area = await AreaSequelize.create({ name });
      return res.status(202).json(area);
    }

    return res.status(400).json({
      message: 'No se encontró ningun área',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateArea = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const area = await AreaSequelize.findByPk(id);

    if (area && name) {
      const updatedArea = await area.update({ name });

      return res.json(updatedArea);
    }

    return res.status(400).json({
      message: 'No se encontro datos que actualizar',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const deleteArea = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteArea = await AreaSequelize.destroy({
      where: {
        id: id,
      },
    });

    if (deleteArea) {
      return res.json({
        message: 'Se elimino el área correctamente',
      });
    }

    return res.status(400).json({
      message: 'El área que intenta eliminar no existe ',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};
