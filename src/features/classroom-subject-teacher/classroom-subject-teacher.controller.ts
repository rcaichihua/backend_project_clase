import { Request, Response } from 'express';
import { parseQueryParams } from '../../common/utils/parse-query-params.util';
import { ClassroomSubjectTeacherService } from './classroom-subject-teacher.service';

export class ClassroomSubjectTeacherController {
  constructor(
    private classroomSubjectTeacherService: ClassroomSubjectTeacherService
  ) {}

  async getAll(req: Request, res: Response) {
    const filters = parseQueryParams(req.query);
    const records = await this.classroomSubjectTeacherService.getAll(filters);
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.classroomSubjectTeacherService.getOne(
      +req.params.id
    );
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const record = await this.classroomSubjectTeacherService.create(req.body);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const record = await this.classroomSubjectTeacherService.update(
      +req.params.id,
      req.body
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.classroomSubjectTeacherService.delete(
      +req.params.id
    );
    res.json(record);
  }
}
