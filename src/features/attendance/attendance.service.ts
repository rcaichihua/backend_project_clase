import { AttendanceRepository } from './attendance.repository';
import { AppError } from '../../common/models/error';
import { Attendance, AttendanceDetail } from '@prisma/client';

export class AttendanceService {
  constructor(private attendanceRepository: AttendanceRepository) {}

  getAll() {
    return this.attendanceRepository.getAll();
  }

  async getOne(id: number) {
    const record = await this.attendanceRepository.getById(id);
    if (record) return record;
    throw new AppError(404, 'Registro no existe');
  }

  async create(
    body: Omit<Attendance, 'id'>,
    details: Omit<AttendanceDetail, 'id' | 'attendanceId'>[]
  ) {
    const record = await this.attendanceRepository.create(body, details);
    return record;
  }

  async update(
    id: number,
    body: Omit<Attendance, 'id'>,
    details: Omit<AttendanceDetail, 'id' | 'attendanceId'>[]
  ) {
    const record = await this.attendanceRepository.update(id, body, details);
    return record;
  }

  delete(id: number) {
    return this.attendanceRepository.delete(id);
  }
}
