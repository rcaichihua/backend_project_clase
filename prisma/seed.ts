import { Permission, Rol, User } from '@prisma/client';
import { HashService } from '../src/common/services/hash.service';
import { DB } from '../src/db';

const hashService = new HashService();

const getUsers = (): Omit<User, 'id'>[] => {
  return [
    {
      dni: '87654321',
      email: 'admin@galaxy.com',
      firstName: 'Super',
      lastName: 'Admin',
      password: hashService.toHash('Root1234.'),
      isSuperuser: true,
    },
    {
      dni: '12345678',
      email: 'staff@galaxy.com',
      firstName: 'Name',
      lastName: 'Lastname',
      password: hashService.toHash('Staff1234.'),
      isSuperuser: false,
    },
  ];
};

const getPermissions = (): Omit<Permission, 'id'>[] => {
  const crudItems: string[] = ['CREATE', 'READ', 'UPDATE', 'DELETE'];
  const modules: string[] = ['USER'];
  const permissionList: string[] = [];

  modules.forEach((module) => {
    crudItems.forEach((crudItem) => {
      permissionList.push(`${module}_${crudItem}`);
    });
  });

  return permissionList.map((permissionItem) => ({ name: permissionItem }));
};

const seed = async () => {
  await Promise.all(getUsers().map((user) => DB.user.create({ data: user })));
  await Promise.all(
    getPermissions().map((permission) =>
      DB.permission.create({ data: permission })
    )
  );
  await DB.rol.create({
    data: {
      name: 'Teacher',
      rolPermission: {
        create: [{ permissionId: 1 }],
      },
    },
  });
  await DB.user.update({
    where: {
      id: 1,
    },
    data: {
      userRol: {
        create: [{ rolId: 1 }],
      },
      userPermission: {
        create: [{ permissionId: 1 }, { permissionId: 2 }],
      },
    },
  });
};

seed();
