import { Request, Response } from 'express';
import { parseQueryParams } from '../../common/utils/parse-query-params.util';
import { ClassroomSubjectStudentService } from './classroom-subject-student.service';

export class ClassroomSubjectStudentController {
  constructor(
    private classroomSubjectStudentService: ClassroomSubjectStudentService
  ) {}

  async getAll(req: Request, res: Response) {
    const filters = parseQueryParams(req.query);
    const records = await this.classroomSubjectStudentService.getAll(filters);
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.classroomSubjectStudentService.getOne(
      +req.params.id
    );
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const record = await this.classroomSubjectStudentService.create(req.body);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const record = await this.classroomSubjectStudentService.update(
      +req.params.id,
      req.body
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.classroomSubjectStudentService.delete(
      +req.params.id
    );
    res.json(record);
  }
}
