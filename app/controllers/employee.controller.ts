import { Request, Response } from 'express';
import { EmployeeSequelize } from '../sequelize/employee.sequelize';

export const listEmployee = async (req: Request, res: Response) => {
  try {
    const records = await EmployeeSequelize.findAll();
    return res.json(records);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getEmployee = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await EmployeeSequelize.findByPk(id);

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

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const dni = req.body.dni;
    const lastName = req.body.lastName;
    const name = req.body.name;
    const birthday = req.body.birthday;
    const email = req.body.email;
    const phone = req.body.phone;
    const status = req.body.status;
    const idUser = req.body.idUser;

    const record = await EmployeeSequelize.create({
      dni,
      lastName,
      name,
      birthday,
      email,
      phone,
      status,
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

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const dni = req.body.dni;
    const lastName = req.body.lastName;
    const name = req.body.name;
    const birthday = req.body.birthday;
    const email = req.body.email;
    const phone = req.body.phone;
    const status = req.body.status;
    const idUser = req.body.idUser;

    const record = await EmployeeSequelize.findByPk(id);

    if (record) {
      const updatedRecord = await record.update({
        dni,
        lastName,
        name,
        birthday,
        email,
        phone,
        status,
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

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedRecord = await EmployeeSequelize.destroy({
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
