import { Request, Response } from 'express';
import { ClassroomSubjectService } from './classroom-subject.service';

export class ClassroomSubjectController {
  constructor(private classroomSubjectService: ClassroomSubjectService) { }

  async getAll(req: Request, res: Response) {
    const records = await this.classroomSubjectService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.classroomSubjectService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const record = await this.classroomSubjectService.create(req.body);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const record = await this.classroomSubjectService.update(
      +req.params.id,
      req.body
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.classroomSubjectService.delete(+req.params.id);
    res.json(record);
  }
}
