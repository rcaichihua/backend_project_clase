import { Request, Response } from 'express';
import { GuardianSequelize } from '../sequelize/guardian.sequelize';

export const listGuardian = async (req: Request, res: Response) => {
  try {
    const records = await GuardianSequelize.findAll();
    return res.json(records);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const getGuardian = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await GuardianSequelize.findByPk(id);

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

export const createGuardian = async (req: Request, res: Response) => {
  try {
    const dni = req.body.dni;
    const lastName = req.body.lastName;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const idGender = req.body.idGender;

    const record = await GuardianSequelize.create({
      dni,
      lastName,
      name,
      email,
      phone,
      idGender,
    });
    return res.status(202).json(record);
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      detail: e,
    });
  }
};

export const updateGuardian = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const dni = req.body.dni;
    const lastName = req.body.lastName;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const idGender = req.body.idGender;

    const record = await GuardianSequelize.findByPk(id);

    if (record) {
      const updatedRecord = await record.update({
        dni,
        lastName,
        name,
        email,
        phone,
        idGender,
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

export const deleteGuardian = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedRecord = await GuardianSequelize.destroy({
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
