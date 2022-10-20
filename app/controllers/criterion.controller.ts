import { Request, Response } from 'express';
import { CriterionSequelize } from '../sequelize/criterion.sequelize';

export const listCriterion = async (req: Request, res: Response) => {
  try {
    const criteria = await CriterionSequelize.findAll();
    return res.json(criteria);
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getCriterion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const criterion = await CriterionSequelize.findByPk(id);

    if (criterion) {
      return res.json(criterion);
    }

    return res.status(400).json({
      message: `El criterio no existe`,
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const createCriterion = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    if (name) {
      const criterion = await CriterionSequelize.create({ name });
      return res.status(202).json(criterion);
    }

    return res.status(400).json({
      message: 'No se encontró ningun criterio',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateCriterion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const criterion = await CriterionSequelize.findByPk(id);

    if (criterion && name) {
      const updatedCriterion = await criterion.update({ name });

      return res.json(updatedCriterion);
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

export const deleteCriterion = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteCriterion = await CriterionSequelize.destroy({
      where: {
        id: id,
      },
    });

    if (deleteCriterion) {
      return res.json({
        message: 'Se elimino el criterio correctamente',
      });
    }

    return res.status(400).json({
      message: 'El criterio que intenta eliminar no existe ',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};
