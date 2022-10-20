import { DataTypes, Model } from 'sequelize';
import { StudentCourse } from '../interfaces/student-course.interface';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class StudentCourseSequelize extends Model implements StudentCourse {
  id!: number;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idCourse!: number;
  idStudent!: number;
}

StudentCourseSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    modelName: 'student_course',
    tableName: 'student_course',
    sequelize,
  }
);
