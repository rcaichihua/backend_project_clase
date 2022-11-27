import { Request, Response } from 'express';
import { SubjectService } from './subject.service';

export class SubjectController {
  constructor(private subjectService: SubjectService) { }

  async getAll(req: Request, res: Response) {
    const records = await this.subjectService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.subjectService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const record = await this.subjectService.create(req.body);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const record = await this.subjectService.update(
      +req.params.id,
      req.body
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.subjectService.delete(+req.params.id);
    res.json(record);
  }
}
