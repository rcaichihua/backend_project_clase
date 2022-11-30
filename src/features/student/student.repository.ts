import { Student } from '@prisma/client';
import { DB } from '../../db';

const select = {
  id: true,
  dni: true,
  email: true,
  firstName: true,
  lastName: true,
  isSuperuser: true,
};

const authSelect = {
  password: true,
  userRol: {
    select: {
      rol: {
        select: {
          rolPermission: {
            select: {
              permission: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  },
  userPermission: {
    select: {
      permission: {
        select: {
          name: true,
        },
      },
    },
  },
};

const rolSelect = {
  userRol: {
    select: {
      rol: true,
    },
  },
};

const permissionSelect = {
  userPermission: {
    select: {
      permission: true,
    },
  },
};

export class StudentRepository {
  async getAll() {
    return await DB.student.findMany({
      select,
    });
  }

  async getById(id: number) {
    return await DB.student.findUnique({
      where: { id },
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
      select,
    });
  }
}
