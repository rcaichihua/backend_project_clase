import { ClassroomSubjectStudent } from '@prisma/client';
import { DB } from '../../db';

const select = {
  id: true,
  classroomSubject: {
    select: {
      id: true,
      classroom: {
        select: {
          grade: true,
          level: true,
        },
      },
      subject: {
        select: {
          name: true,
        },
      },
    },
  },
  student: {
    select: {
      id: true,
      dni: true,
      firstName: true,
      lastName: true,
    },
  },
};

export class ClassroomSubjectStudentRepository {
  async getAll(filters: Partial<Omit<ClassroomSubjectStudent, 'id'>>) {
    return await DB.classroomSubjectStudent.findMany({
      orderBy: {
        student: {
          lastName: 'asc',
        },
      },
      select,
      where: {
        ...filters,
      },
    });
  }

  async getById(id: number) {
    return await DB.classroomSubjectStudent.findUnique({
      select,
      where: { id },
    });
  }

  async create(body: Omit<ClassroomSubjectStudent, 'id'>) {
    return await DB.classroomSubjectStudent.create({
      data: {
        ...body,
      },
    });
  }

  async update(id: number, body: Omit<ClassroomSubjectStudent, 'id'>) {
    return await DB.classroomSubjectStudent.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
  }

  async delete(id: number) {
    return await DB.classroomSubjectStudent.delete({
      where: {
        id,
      },
    });
  }
}
