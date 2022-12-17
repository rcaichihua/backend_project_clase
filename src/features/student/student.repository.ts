import { Student } from '@prisma/client';
import { DB } from '../../db';

const select = {
  id: true,
  dni: true,
  firstName: true,
  lastName: true,
};

const selectClassroomSubjectStudent = {
  classroomSubjectStudent: {
    select: {
      id: true,
      classroomSubject: {
        select: {
          id: true,
          classroom: true,
          subject: true,
        },
      },
    },
  },
};
export class StudentRepository {
  async getAll() {
    return await DB.student.findMany();
  }

  async getById(id: number) {
    return await DB.student.findUnique({
      where: { id },
      select: {
        ...select,
        ...selectClassroomSubjectStudent,
      },
    });
  }

  async create(body: Omit<Student, 'id'>, classroomSubjectIds: number[]) {
    return await DB.student.create({
      data: {
        ...body,
        classroomSubjectStudent: {
          create: classroomSubjectIds.map((classroomSubjectId) => ({
            classroomSubjectId,
          })),
        },
      },
      select: {
        ...select,
        ...selectClassroomSubjectStudent,
      },
    });
  }

  async update(
    id: number,
    body: Omit<Student, 'id'>,
    classroomSubjectIds: number[]
  ) {
    return await DB.student.update({
      where: {
        id,
      },
      data: {
        ...body,
        classroomSubjectStudent: {
          deleteMany: {},
          create: classroomSubjectIds.map((classroomSubjectId) => ({
            classroomSubjectId,
          })),
        },
      },
      select: {
        ...select,
        ...selectClassroomSubjectStudent,
      },
    });
  }

  async delete(id: number) {
    await DB.student.update({
      where: {
        id,
      },
      data: {
        classroomSubjectStudent: {
          deleteMany: {},
        },
      },
    });
    return await DB.student.delete({
      where: {
        id,
      },
    });
  }
}
