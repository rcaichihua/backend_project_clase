import { User } from '@prisma/client';
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

const classroomSubjectTeacherSelect = {
  classroomSubjectTeacher: {
    select: {
      classroomSubject: {
        select: {
          classroom: true,
          subject: true,
        },
      },
    },
  },
};

export class UserRepository {
  async getAll() {
    return await DB.user.findMany({
      select,
    });
  }

  async getById(id: number) {
    return await DB.user.findUnique({
      where: { id },
      select: {
        ...select,
        ...rolSelect,
        ...permissionSelect,
        ...classroomSubjectTeacherSelect,
      },
    });
  }

  async getRefreshTokenById(id: number) {
    return await DB.user.findUnique({
      where: { id },
      select: {
        refreshToken: true,
      },
    });
  }

  async getByIdWithPermissions(id: number) {
    return await DB.user.findUnique({
      where: { id },
      select: {
        ...select,
        ...authSelect,
      },
    });
  }

  async getByEmailWithPermissions(email: string) {
    return await DB.user.findUnique({
      where: { email },
      select: {
        ...select,
        ...authSelect,
      },
    });
  }

  async create(
    body: Omit<User, 'id'>,
    permissionIds: number[],
    rolIds: number[],
    classroomSubjectIds: number[]
  ) {
    return await DB.user.create({
      data: {
        ...body,
        userRol: {
          create: rolIds.map((rolId) => ({ rolId })),
        },
        userPermission: {
          create: permissionIds.map((permissionId) => ({ permissionId })),
        },
        classroomSubjectTeacher: {
          create: classroomSubjectIds.map((classroomSubjectId) => ({
            classroomSubjectId,
          })),
        },
      },
      select: {
        ...select,
        ...rolSelect,
        ...permissionSelect,
        ...classroomSubjectTeacherSelect,
      },
    });
  }

  async update(
    id: number,
    body: Omit<User, 'id'>,
    permissionIds: number[],
    rolIds: number[],
    classroomSubjectIds: number[]
  ) {
    return await DB.user.update({
      where: {
        id,
      },
      data: {
        ...body,
        userRol: {
          deleteMany: {},
          create: rolIds.map((rolId) => ({ rolId })),
        },
        userPermission: {
          deleteMany: {},
          create: permissionIds.map((permissionId) => ({ permissionId })),
        },
        classroomSubjectTeacher: {
          deleteMany: {},
          create: classroomSubjectIds.map((classroomSubjectId) => ({
            classroomSubjectId,
          })),
        },
      },
      select: {
        ...select,
        ...rolSelect,
        ...permissionSelect,
        ...classroomSubjectTeacherSelect,
      },
    });
  }

  async updateRefreshToken(id: number, refreshToken: string) {
    return await DB.user.update({
      where: {
        id,
      },
      data: {
        refreshToken,
      },
    });
  }

  async delete(id: number) {
    await DB.user.update({
      where: {
        id,
      },
      data: {
        userRol: {
          deleteMany: {},
        },
        userPermission: {
          deleteMany: {},
        },
      },
    });
    return await DB.user.delete({
      where: {
        id,
      },
      select,
    });
  }
}
