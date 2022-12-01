/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { faker } from '@faker-js/faker';
import { Classroom, Permission, Student, Subject, User } from '@prisma/client';
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
  const modules: string[] = [
    'USER',
    'ROL',
    'CLASSROOM',
    'SUBJECT',
    'CLASSROOM_SUBJECT',
    'CLASSROOM_SUBJECT_TEACHER',
    'CLASSROOM_SUBJECT_STUDENT',
    'ATTENDANCE',
  ];
  const permissionList: string[] = [];

  modules.forEach((module) => {
    crudItems.forEach((crudItem) => {
      permissionList.push(`${module}_${crudItem}`);
    });
  });

  return permissionList.map((permissionItem) => ({ name: permissionItem }));
};

const getClassrooms = (): Omit<Classroom, 'id'>[] => {
  return [
    {
      grade: '1',
      level: 1,
    },
    {
      grade: '2',
      level: 1,
    },
    {
      grade: '3',
      level: 1,
    },
    {
      grade: '4',
      level: 1,
    },
    {
      grade: '5',
      level: 1,
    },
    {
      grade: '6',
      level: 1,
    },
    {
      grade: '1',
      level: 2,
    },
    {
      grade: '2',
      level: 2,
    },
    {
      grade: '3',
      level: 2,
    },
    {
      grade: '4',
      level: 2,
    },
    {
      grade: '5',
      level: 2,
    },
  ];
};

const getSubjects = (): Omit<Subject, 'id'>[] => {
  return [
    {
      name: 'Matemáticas',
    },
    {
      name: 'Comunicación',
    },
    {
      name: 'Arte',
    },
    {
      name: 'Educación Fisica',
    },
  ];
};

const getStudents = (quantity: number): Omit<Student, 'id'>[] => {
  return [...Array(quantity).keys()].map(() => ({
    dni: String(faker.datatype.number({ min: 10000000, max: 99999999 })),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));
};

const addStudentsClassrooms = async (skip = 0) => {
  await Promise.all(
    getStudents(10).map((student) => DB.student.create({ data: student }))
  );

  const students = await DB.student.findMany({ skip: skip * 10, take: 10 });
  const classroomSubject = await DB.classroomSubject.findFirst({ skip });

  students.forEach(async (student) => {
    await DB.classroomSubjectStudent.create({
      data: { classroomSubjectId: classroomSubject!.id, studentId: student.id },
    });
  });
};

const addTeachersClassrooms = async (skip = 0) => {
  const teacher = await DB.user.findFirst({ skip });
  const classroomSubject = await DB.classroomSubject.findMany({
    skip: skip * 3,
    take: 3,
  });

  classroomSubject.forEach(async (item) => {
    await DB.classroomSubjectTeacher.create({
      data: { classroomSubjectId: item.id, teacherId: teacher!.id },
    });
  });
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

  await Promise.all(
    getClassrooms().map((classroom) => DB.classroom.create({ data: classroom }))
  );

  await Promise.all(
    getSubjects().map((subject) => DB.subject.create({ data: subject }))
  );

  const subjects = await DB.subject.findMany();
  const classrooms = await DB.classroom.findMany();

  subjects.forEach((subject) => {
    classrooms.forEach(async (classroom) => {
      await DB.classroomSubject.create({
        data: { classroomId: classroom.id, subjectId: subject.id },
      });
    });
  });

  await addStudentsClassrooms();
  await addStudentsClassrooms(1);
  await addStudentsClassrooms(2);
  await addStudentsClassrooms(3);
  await addStudentsClassrooms(4);

  await addTeachersClassrooms();
  await addTeachersClassrooms(1);
};

seed();
