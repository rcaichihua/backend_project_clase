import { AppError } from '../../common/models/error';
import { Subject } from '@prisma/client';
import { SubjectRepository } from './subject.repository';

export class SubjectService {
  constructor(private subjectRepository: SubjectRepository) {}

  getAll() {
    return this.subjectRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.subjectRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Materia no existe');
  }

  async create(subject: Omit<Subject, 'id'>) {
    const record = await this.subjectRepository.create(subject);
    return record;
  }

  async update(id: number, subject: Omit<Subject, 'id'>) {
    const record = await this.subjectRepository.update(id, subject);
    return record;
  }

  delete(id: number) {
    return this.subjectRepository.delete(id);
  }
}
