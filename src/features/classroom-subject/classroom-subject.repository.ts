import { ClassroomSubject } from '@prisma/client';
import { DB } from '../../db';

export class ClassroomSubjectRepository {
  async getAll() {
    return await DB.classroomSubject.findMany();
  }

  async getById(id: number) {
    return await DB.classroomSubject.findUnique({
      where: { id },
    });
  }

  async create(body: Omit<ClassroomSubject, 'id'>) {
    return await DB.classroomSubject.create({
      data: {
        ...body,
      },
    });
  }

  async update(id: number, body: Omit<ClassroomSubject, 'id'>) {
    return await DB.classroomSubject.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
  }

  async delete(id: number) {
    return await DB.classroomSubject.delete({
      where: {
        id,
      },
    });
  }
}
