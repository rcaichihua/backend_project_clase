import { Permission } from '@prisma/client';
import { DB } from '../../db';

export class PermissionRepository {
  async getAll() {
    return await DB.permission.findMany();
  }

  async getById(id: number) {
    return await DB.permission.findUnique({
      where: { id },
    });
  }

  async create(body: Omit<Permission, 'id'>) {
    return await DB.permission.create({
      data: body,
    });
  }

  async update(id: number, body: Omit<Permission, 'id'>) {
    return await DB.permission.update({
      where: {
        id,
      },
      data: body,
    });
  }

  async delete(id: number) {
    return await DB.permission.delete({
      where: {
        id,
      },
    });
  }
}
