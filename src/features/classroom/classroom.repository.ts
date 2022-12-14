import { Classroom } from '@prisma/client';
import { DB } from '../../db';

const select = {
  id: true,
  grade: true,
  level: true,
};

const selectClassroomSubject = {
  classroomSubject: {
    select: {
      id: true,
      classroom: true,
      subject: true,
    },
  },
};

export class ClassroomRepository {
  async getAll() {
    return await DB.classroom.findMany();
  }

  async getById(id: number) {
    return await DB.classroom.findUnique({
      where: { id },
      select: {
        ...select,
        ...selectClassroomSubject,
      },
    });
  }

  async create(body: Omit<Classroom, 'id'>, subjectIds: number[]) {
    return await DB.classroom.create({
      data: {
        ...body,
        classroomSubject: {
          create: subjectIds.map((subjectId) => ({
            subjectId,
          })),
        },
      },
      select: {
        ...select,
        ...selectClassroomSubject,
      },
    });
  }

  async update(id: number, body: Omit<Classroom, 'id'>, subjectIds: number[]) {
    return await DB.classroom.update({
      where: {
        id,
      },
      data: {
        ...body,
        classroomSubject: {
          deleteMany: {},
          create: subjectIds.map((subjectId) => ({
            subjectId,
          })),
        },
      },
      select: {
        ...select,
        ...selectClassroomSubject,
      },
    });
  }

  async delete(id: number) {
    return await DB.classroom.delete({
      where: {
        id,
      },
    });
  }
}
