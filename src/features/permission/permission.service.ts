import { AppError } from '../../common/models/error';
import { PermissionRepository } from './permission.repository';
import { Permission } from '@prisma/client';

export class PermissionService {
  constructor(private permissionRepository: PermissionRepository) {}

  getAll() {
    return this.permissionRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.permissionRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Permiso no existe');
  }

  create(body: Omit<Permission, 'id'>) {
    return this.permissionRepository.create(body);
  }

  update(id: number, body: Omit<Permission, 'id'>) {
    return this.permissionRepository.update(id, body);
  }

  delete(id: number) {
    return this.permissionRepository.delete(id);
  }
}
