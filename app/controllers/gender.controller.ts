import { Request, Response } from 'express';
import { GenderSequelize } from '../sequelize/gender.sequelize';

export const listGender = async (req: Request, res: Response) => {
  try {
    const genders = await GenderSequelize.findAll();
    return res.json(genders);
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getGender = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const gender = await GenderSequelize.findByPk(id);

    if (gender) {
      return res.json(gender);
    }

    return res.status(400).json({
      message: `El género no existe`,
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const createGender = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    if (name) {
      const gender = await GenderSequelize.create({ name });
      return res.status(202).json(gender);
    }

    return res.status(400).json({
      message: 'No se encontró ningun género',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateGender = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const gender = await GenderSequelize.findByPk(id);

    if (gender && name) {
      const updatedGender = await gender.update({ name });

      return res.json(updatedGender);
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

export const deleteGender = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteGender = await GenderSequelize.destroy({
      where: {
        id: id,
      },
    });

    if (deleteGender) {
      return res.json({
        message: 'Se elimino el género correctamente',
      });
    }

    return res.status(400).json({
      message: 'El género que intenta eliminar no existe ',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};
