import { Request, Response } from 'express';
import { GradeSequelize } from '../sequelize/grade.sequelize';

export const listGrade = async (req: Request, res: Response) => {
  try {
    const grade = await GradeSequelize.findAll();
    return res.json(grade);
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getGrade = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const grade = await GradeSequelize.findByPk(id);

    if (grade) {
      return res.json(grade);
    }

    return res.status(400).json({
      message: `El grado no existe`,
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const createGrade = async (req: Request, res: Response) => {
  try {
    const grade = req.body.grade;
    const level = req.body.level;

    if (grade && level) {
      const newGrade = await GradeSequelize.create({ grade, level });

      return res.status(202).json(newGrade);
    }

    return res.status(400).json({
      message: 'Es necesario registrar el grado y nivel',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateGrade = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const grade = req.body.grade;
    const level = req.body.level;

    const updateGrade = await GradeSequelize.findByPk(id);

    if (updateGrade && (grade || level)) {
      const updatedGrade = await updateGrade.update({ grade, level });
      return res.json(updatedGrade);
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

export const deleteGrade = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteGrade = await GradeSequelize.destroy({
      where: {
        id: id,
      },
    });

    if (deleteGrade) {
      return res.json({
        message: 'Se elimino el grado correctamente',
      });
    }

    return res.status(400).json({
      message: 'El grado que intenta eliminar no existe ',
    });
  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e,
    });
  }
};
