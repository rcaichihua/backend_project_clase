import { AppError } from '../../common/models/error';
import { ClassroomSubjectStudent } from '@prisma/client';
import { ClassroomSubjectStudentRepository } from './classroom-subject-student.repository';

export class ClassroomSubjectStudentService {
  constructor(
    private classroomSubjectStudentRepository: ClassroomSubjectStudentRepository
  ) {}

  getAll(filters: Partial<Omit<ClassroomSubjectStudent, 'id'>>) {
    return this.classroomSubjectStudentRepository.getAll(filters);
  }

  async getOne(id: number) {
    const record = await this.classroomSubjectStudentRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Registro no existe');
  }

  async create(classroomSubject: Omit<ClassroomSubjectStudent, 'id'>) {
    const record = await this.classroomSubjectStudentRepository.create(
      classroomSubject
    );
    return record;
  }

  async update(
    id: number,
    classroomSubject: Omit<ClassroomSubjectStudent, 'id'>
  ) {
    const record = await this.classroomSubjectStudentRepository.update(
      id,
      classroomSubject
    );
    return record;
  }

  delete(id: number) {
    return this.classroomSubjectStudentRepository.delete(id);
  }
}
