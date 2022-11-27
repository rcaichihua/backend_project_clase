import { Classroom } from '@prisma/client';
import { DB } from '../../db';

export class ClassroomRepository {
  async getAll() {
    return await DB.classroom.findMany();
  }

  async getById(id: number) {
    return await DB.classroom.findUnique({
      where: { id },
    });
  }

  async create(body: Omit<Classroom, 'id'>) {
    return await DB.classroom.create({
      data: {
        ...body,
      },
    });
  }

  async update(id: number, body: Omit<Classroom, 'id'>) {
    return await DB.classroom.update({
      where: {
        id,
      },
      data: {
        ...body,
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
