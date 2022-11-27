import { Subject } from '@prisma/client';
import { DB } from '../../db';

export class SubjectRepository {
  async getAll() {
    return await DB.subject.findMany();
  }

  async getById(id: number) {
    return await DB.subject.findUnique({
      where: { id },
    });
  }

  async create(body: Omit<Subject, 'id'>) {
    return await DB.subject.create({
      data: {
        ...body,
      },
    });
  }

  async update(id: number, body: Omit<Subject, 'id'>) {
    return await DB.subject.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });
  }

  async delete(id: number) {
    return await DB.subject.delete({
      where: {
        id,
      },
    });
  }
}
