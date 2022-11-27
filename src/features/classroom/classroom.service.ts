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

  async create(classroom: Omit<Classroom, 'id'>) {
    const record = await this.classroomRepository.create(classroom);
    return record;
  }

  async update(id: number, classroom: Omit<Classroom, 'id'>) {
    const record = await this.classroomRepository.update(id, classroom);
    return record;
  }

  delete(id: number) {
    return this.classroomRepository.delete(id);
  }
}
