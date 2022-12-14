import { UserRepository } from './user.repository';
import { HashService } from '../../common/services/hash.service';
import { AppError } from '../../common/models/error';
import { Permission, Rol, User } from '@prisma/client';

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

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService
  ) {}

  getAll() {
    return this.userRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.userRepository.getById(id);
    if (record) return adapter(record);
    throw new AppError(404, 'Usuario no existe');
  }

  async create(
    body: Omit<User, 'id' | 'password'>,
    permissionIds: number[],
    rolIds: number[],
    classroomSubjectIds: number[]
  ) {
    const exist = await this.userRepository.getByEmailWithPermissions(
      body.email
    );

    if (exist) {
      throw new AppError(400, 'ERR_USR_0001');
    }

    const data: Omit<User, 'id'> = {
      ...body,
      password: this.hashService.toHash(body.dni),
    };
    const record = await this.userRepository.create(
      data,
      permissionIds,
      rolIds,
      classroomSubjectIds
    );
    return adapter(record);
  }

  async update(
    id: number,
    body: Omit<User, 'id'>,
    permissionIds: number[],
    rolIds: number[],
    classroomSubjectIds: number[]
  ) {
    const record = await this.userRepository.update(
      id,
      body,
      permissionIds,
      rolIds,
      classroomSubjectIds
    );
    return adapter(record);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
