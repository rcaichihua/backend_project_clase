import { AppError } from '../../common/models/error';
import { Permission, Rol, RolPermission } from '@prisma/client';
import { RolRepository } from './rol.repository';

type QueryResultItem = Rol & {
  rolPermission: (RolPermission & {
    permission: Permission;
  })[];
};

const adapter = ({ id, name, rolPermission }: QueryResultItem) => {
  return {
    id,
    name,
    permissions: rolPermission.map((item) => item.permission),
  };
};

export class RolService {
  constructor(private rolRepository: RolRepository) {}

  getAll() {
    return this.rolRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.rolRepository.getById(id);
    if (record) return adapter(record);
    throw new AppError(404, 'Rol no existe');
  }

  async create(rol: Omit<Rol, 'id'>, permissionIds: number[]) {
    const record = await this.rolRepository.create(rol, permissionIds);
    return adapter(record);
  }

  async update(id: number, rol: Omit<Rol, 'id'>, permissionIds: number[]) {
    const record = await this.rolRepository.update(id, rol, permissionIds);
    return adapter(record);
  }

  delete(id: number) {
    return this.rolRepository.delete(id);
  }
}
