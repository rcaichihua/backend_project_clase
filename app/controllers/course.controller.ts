import { Request, Response } from 'express';
import { CourseSequelize } from '../sequelize/course.sequelize';

export const listCourse = async (req: Request, res: Response) => {
  try {
    const records = await CourseSequelize.findAll();
    return res.json(records);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await CourseSequelize.findByPk(id);

    if (record) {
      return res.json(record);
    }

    return res.status(404).json({
      message: `El registro no existe`,
    });
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const year = req.body.year;
    const status = req.body.status;
    const idEmployee = req.body.idEmployee;
    const idCriterion = req.body.idCriterion;
    const idGrade = req.body.idGrade;

    const record = await CourseSequelize.create({
      year,
      status,
      idEmployee,
      idCriterion,
      idGrade,
    });
    return res.status(202).json(record);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const year = req.body.year;
    const status = req.body.status;
    const idEmployee = req.body.idEmployee;
    const idCriterion = req.body.idCriterion;
    const idGrade = req.body.idGrade;

    const record = await CourseSequelize.findByPk(id);

    if (record) {
      const updatedRecord = await record.update({
        year,
        status,
        idEmployee,
        idCriterion,
        idGrade,
      });

      return res.json(updatedRecord);
    }

    return res.status(404).json({
      message: 'El registro que intenta actualizar no existe',
    });
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedRecord = await CourseSequelize.destroy({
      where: {
        id: id,
      },
    });

    if (deletedRecord) {
      return res.json({
        message: 'Se elimino el registro correctamente',
      });
    }

    return res.status(404).json({
      message: 'El registro que intenta eliminar no existe ',
    });
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};
