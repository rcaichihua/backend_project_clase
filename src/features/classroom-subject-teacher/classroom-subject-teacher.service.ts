import { AppError } from '../../common/models/error';
import { ClassroomSubjectTeacher } from '@prisma/client';
import { ClassroomSubjectTeacherRepository } from './classroom-subject-teacher.repository';

export class ClassroomSubjectTeacherService {
  constructor(
    private classroomSubjectTeacherRepository: ClassroomSubjectTeacherRepository
  ) {}

  getAll(filters: Partial<Omit<ClassroomSubjectTeacher, 'id'>>) {
    return this.classroomSubjectTeacherRepository.getAll(filters);
  }

  async getOne(id: number) {
    const record = await this.classroomSubjectTeacherRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Registro no existe');
  }

  async create(classroomSubject: Omit<ClassroomSubjectTeacher, 'id'>) {
    const record = await this.classroomSubjectTeacherRepository.create(
      classroomSubject
    );
    return record;
  }

  async update(
    id: number,
    classroomSubject: Omit<ClassroomSubjectTeacher, 'id'>
  ) {
    const record = await this.classroomSubjectTeacherRepository.update(
      id,
      classroomSubject
    );
    return record;
  }

  delete(id: number) {
    return this.classroomSubjectTeacherRepository.delete(id);
  }
}
