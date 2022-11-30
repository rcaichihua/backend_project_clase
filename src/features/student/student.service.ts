import { StudentRepository } from './student.repository';
import { AppError } from '../../common/models/error';
import { Permission, Rol, Student } from '@prisma/client';

type QueryResultItem = {
  id: number;
  userPermission: {
    permission: Permission;
  }[];
  userRol: {
    rol: Rol;
  }[];
  dni: string;
  email: string;
  firstName: string;
  lastName: string;
  isSuperuser: boolean;
};

const adapter = ({ userPermission, userRol, ...data }: QueryResultItem) => {
  return {
    ...data,
    permissions: userPermission.map((item) => item.permission),
    rols: userRol.map((item) => item.rol),
  };
};

export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  getAll() {
    return this.studentRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.studentRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Estudiante no existe');
  }

  async create(body: Omit<Student, 'id'>, classroomSubjectIds: number[]) {
    const record = await this.studentRepository.create(
      body,
      classroomSubjectIds
    );
    return record;
  }

  async update(
    id: number,
    body: Omit<Student, 'id'>,
    classroomSubjectIds: number[]
  ) {
    const record = await this.studentRepository.update(
      id,
      body,
      classroomSubjectIds
    );
    return record;
  }

  delete(id: number) {
    return this.studentRepository.delete(id);
  }
}
