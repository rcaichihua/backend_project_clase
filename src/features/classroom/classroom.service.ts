import { AppError } from '../../common/models/error';
import { Classroom } from '@prisma/client';
import { ClassroomRepository } from './classroom.repository';

export class ClassroomService {
  constructor(private classroomRepository: ClassroomRepository) {}

  getAll() {
    return this.classroomRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.classroomRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Salon no existe');
  }

  async create(body: Omit<Classroom, 'id'>, subjectIds: number[]) {
    const record = await this.classroomRepository.create(body, subjectIds);
    return record;
  }

  async update(id: number, body: Omit<Classroom, 'id'>, subjectIds: number[]) {
    const record = await this.classroomRepository.update(id, body, subjectIds);
    return record;
  }

  delete(id: number) {
    return this.classroomRepository.delete(id);
  }
}
