import { Request, Response } from 'express';
import { ShiftSequelize } from '../sequelize/shift.sequelize';

export const listShift = async (req: Request, res: Response) => {
  try {
    const shifts = await ShiftSequelize.findAll();
    return res.json(shifts);
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}

export const getShift = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const shift = await ShiftSequelize.findByPk(id);

    if (shift) {
      return res.json(shift);
    }

    return res.status(400).json({
      message: `El turno no existe`
    });
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}

export const createShift = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;

    if (name === undefined) {
      return res.status(400).json({
        message: 'No se encontró ningun turno'
      });
    }

    const shift = await ShiftSequelize.create({name});

    return res.status(202).json(shift);
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}

export const updateShift = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const shift = await ShiftSequelize.findByPk(id);

    if (shift && name) {
      const updatedShift = await shift.update({name});

      return res.json(updatedShift);
    }

    return res.status(400).json({
      message: 'No se encontro datos que actualizar'
    });

  } catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}

export const deleteShift = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deleteShift = await ShiftSequelize.destroy({
      where: {
        id: id
      }
    });

    if (deleteShift) {
      return res.json({
        message: 'Se elimino el turno correctamente'
      });
    }

    return res.status(400).json({
      message: 'El turno que intenta eliminar no existe '
    });
  }
  catch (e) {
    return res.status(404).json({
      message: 'Error',
      detail: e
    });
  }
}
