import { ClassroomSubjectTeacher } from '@prisma/client';
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
  teacherId: true,
};

export class ClassroomSubjectTeacherRepository {
  async getAll(filters: Partial<Omit<ClassroomSubjectTeacher, 'id'>>) {
    return await DB.classroomSubjectTeacher.findMany({
      orderBy: [
        {
          classroomSubject: {
            classroom: {
              grade: 'asc',
            },
          },
        },
        {
          classroomSubject: {
            classroom: {
              level: 'asc',
            },
          },
        },
        {
          classroomSubject: {
            subject: {
              name: 'asc',
            },
          },
        },
      ],
      select,
      where: {
        ...filters,
      },
    });
  }

  async getById(id: number) {
    return await DB.classroomSubjectTeacher.findUnique({
      select,
      where: { id },
    });
  }

  async create(body: Omit<ClassroomSubjectTeacher, 'id'>) {
    return await DB.classroomSubjectTeacher.create({
      data: {
        ...body,
      },
    });
  }

  async update(id: number, body: Omit<ClassroomSubjectTeacher, 'id'>) {
    return await DB.classroomSubjectTeacher.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
  }

  async delete(id: number) {
    return await DB.classroomSubjectTeacher.delete({
      where: {
        id,
      },
    });
  }
}
