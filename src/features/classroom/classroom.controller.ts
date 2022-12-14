import { Request, Response } from 'express';
import { ClassroomService } from './classroom.service';

export class ClassroomController {
  constructor(private classroomService: ClassroomService) {}

  async getAll(req: Request, res: Response) {
    const records = await this.classroomService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.classroomService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const { subjectIds, ...student } = req.body;
    const record = await this.classroomService.create(student, subjectIds);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const { subjectIds, ...student } = req.body;
    const record = await this.classroomService.update(
      +req.params.id,
      student,
      subjectIds
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.classroomService.delete(+req.params.id);
    res.json(record);
  }
}
