import { Request, Response } from 'express';
import { AttendanceService } from './attendance.service';

export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  async getAll(req: Request, res: Response) {
    const records = await this.attendanceService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.attendanceService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const { details, ...attendance } = req.body;
    const record = await this.attendanceService.create(attendance, details);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const { details, ...attendance } = req.body;
    const record = await this.attendanceService.update(
      +req.params.id,
      attendance,
      details
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.attendanceService.delete(+req.params.id);
    res.json(record);
  }
}
