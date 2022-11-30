import { Request, Response } from 'express';
import { StudentService } from './student.service';

export class StudentController {
  constructor(private studentService: StudentService) {}

  async getAll(req: Request, res: Response) {
    const records = await this.studentService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.studentService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const { classroomSubjectIds, ...student } = req.body;
    const record = await this.studentService.create(
      student,
      classroomSubjectIds
    );
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const { classroomSubjectIds, ...student } = req.body;
    const record = await this.studentService.update(
      +req.params.id,
      student,
      classroomSubjectIds
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.studentService.delete(+req.params.id);
    res.json(record);
  }
}
