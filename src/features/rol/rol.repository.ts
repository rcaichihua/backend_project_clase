import { Rol } from '@prisma/client';
import { DB } from '../../db';

const include = {
  rolPermission: {
    include: {
      permission: true,
    },
  },
};

export class RolRepository {
  async getAll() {
    return await DB.rol.findMany();
  }

  async getById(id: number) {
    return await DB.rol.findUnique({
      where: { id },
      include,
    });
  }

  async create(body: Omit<Rol, 'id'>, permissionIds: number[]) {
    return await DB.rol.create({
      data: {
        ...body,
        rolPermission: {
          create: permissionIds.map((permissionId) => ({ permissionId })),
        },
      },
      include,
    });
  }

  async update(id: number, body: Omit<Rol, 'id'>, permissionIds: number[]) {
    return await DB.rol.update({
      where: {
        id,
      },
      data: {
        ...body,
        rolPermission: {
          deleteMany: {},
          create: permissionIds.map((permissionId) => ({ permissionId })),
        },
      },
      include,
    });
  }

  async delete(id: number) {
    await DB.rol.update({
      where: {
        id,
      },
      data: {
        rolPermission: {
          deleteMany: {},
        },
      },
    });
    return await DB.rol.delete({
      where: {
        id,
      },
    });
  }
}
