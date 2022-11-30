import { ClassroomSubject } from '@prisma/client';
import { DB } from '../../db';

const select = {
  id: true,
  classroom: {
    select: {
      id: true,
      grade: true,
      level: true,
    },
  },
  subject: {
    select: {
      id: true,
      name: true,
    },
  },
};
export class ClassroomSubjectRepository {
  async getAll() {
    return await DB.classroomSubject.findMany({
      select,
    });
  }

  async getById(id: number) {
    return await DB.classroomSubject.findUnique({
      select,
      where: { id },
    });
  }

  async create(body: Omit<ClassroomSubject, 'id'>) {
    return await DB.classroomSubject.create({
      select,
      data: {
        ...body,
      },
    });
  }

  async update(id: number, body: Omit<ClassroomSubject, 'id'>) {
    return await DB.classroomSubject.update({
      select,
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
