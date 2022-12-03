import { Attendance, AttendanceDetail } from '@prisma/client';
import { DB } from '../../db';

export class AttendanceRepository {
  async getAll() {
    return await DB.attendance.findMany({
      select: {
        id: true,
        date: true,
        classroomSubject: {
          select: {
            id: true,
            classroom: true,
            subject: true,
          },
        },
      },
    });
  }

  async getById(id: number) {
    return await DB.attendance.findUnique({
      where: { id },
      include: {
        classroomSubject: {
          select: {
            id: true,
            classroom: true,
            subject: true,
          },
        },
        attendanceDetail: {
          orderBy: [
            {
              student: {
                lastName: 'asc',
              },
            },
            {
              student: {
                firstName: 'asc',
              },
            },
          ],
          select: {
            id: true,
            status: true,
            student: true,
          },
        },
      },
    });
  }

  async create(
    body: Omit<Attendance, 'id'>,
    details: Omit<AttendanceDetail, 'id' | 'attendanceId'>[]
  ) {
    return await DB.attendance.create({
      data: {
        ...body,
        attendanceDetail: {
          create: details.map((detail) => ({
            studentId: detail.studentId,
            status: detail.status,
          })),
        },
      },
    });
  }

  async update(
    id: number,
    body: Omit<Attendance, 'id'>,
    details: Omit<AttendanceDetail, 'id' | 'attendanceId'>[]
  ) {
    return await DB.attendance.update({
      where: {
        id,
      },
      data: {
        ...body,
        attendanceDetail: {
          deleteMany: {},
          create: details.map((detail) => ({
            studentId: detail.studentId,
            status: detail.status,
          })),
        },
      },
    });
  }

  async delete(id: number) {
    await DB.attendance.update({
      where: {
        id,
      },
      data: {
        attendanceDetail: {
          deleteMany: {},
        },
      },
    });
    return await DB.attendance.delete({
      where: {
        id,
      },
    });
  }
}
