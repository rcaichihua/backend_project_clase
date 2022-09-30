export interface Attendance {
  id: number;
  day: Date;
  status: boolean;
  updatedAt: Date;
  createdAt: Date;
  idCourse: number;
  idStudent: number;
}
