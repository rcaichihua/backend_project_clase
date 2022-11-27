import { AppError } from '../../common/models/error';
import { ClassroomSubject } from '@prisma/client';
import { ClassroomSubjectRepository } from './classroom-subject.repository';

export class ClassroomSubjectService {
  constructor(private classroomSubjectRepository: ClassroomSubjectRepository) {}

  getAll() {
    return this.classroomSubjectRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.classroomSubjectRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Materia no existe');
  }

  async create(classroomSubject: Omit<ClassroomSubject, 'id'>) {
    const record = await this.classroomSubjectRepository.create(classroomSubject);
    return record;
  }

  async update(id: number, classroomSubject: Omit<ClassroomSubject, 'id'>) {
    const record = await this.classroomSubjectRepository.update(id, classroomSubject);
    return record;
  }

  delete(id: number) {
    return this.classroomSubjectRepository.delete(id);
  }
}
