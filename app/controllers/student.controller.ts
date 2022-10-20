import { Request, Response } from 'express';
import { StudentSequelize } from '../sequelize/student.sequelize';

export const listStudent = async (req: Request, res: Response) => {
  try {
    const records = await StudentSequelize.findAll();
    return res.json(records);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await StudentSequelize.findByPk(id);

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

export const createStudent = async (req: Request, res: Response) => {
  try {
    const dni = req.body.dni;
    const lastName = req.body.lastName;
    const name = req.body.name;
    const birthday = req.body.birthday;
    const status = req.body.status;
    const idGender = req.body.idGender;
    const idGuardian = req.body.idGuardian;
    const idUser = req.body.idUser;

    const record = await StudentSequelize.create({
      dni,
      lastName,
      name,
      birthday,
      status,
      idGender,
      idGuardian,
      idUser,
    });
    return res.status(202).json(record);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const dni = req.body.dni;
    const lastName = req.body.lastName;
    const name = req.body.name;
    const birthday = req.body.birthday;
    const status = req.body.status;
    const idGender = req.body.idGender;
    const idGuardian = req.body.idGuardian;
    const idUser = req.body.idUser;

    const record = await StudentSequelize.findByPk(id);

    if (record) {
      const updatedRecord = await record.update({
        dni,
        lastName,
        name,
        birthday,
        status,
        idGender,
        idGuardian,
        idUser,
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

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedRecord = await StudentSequelize.destroy({
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
