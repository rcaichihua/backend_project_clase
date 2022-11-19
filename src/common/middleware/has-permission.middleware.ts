import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../../features/user/user.repository';
import { AppError } from '../models/error';

const userRepository = new UserRepository();

export const HasPermissionMiddleware = (permission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = await userRepository.getByIdWithPermissions(req.userId!);

    if (!user) {
      throw new AppError(404, 'Usuario no existe');
    }

    const permissions = new Set();

    user.userRol.forEach((userRol) =>
      userRol.rol.rolPermission.forEach((rolPermission) =>
        permissions.add(rolPermission.permission.name)
      )
    );

    user.userPermission.forEach((userPermission) =>
      permissions.add(userPermission.permission.name)
    );

    if (!(user.isSuperuser || permissions.has(permission))) {
      throw new AppError(403, 'El usuario no tiene los permisos necesarios');
    }

    return next();
  };
};
