import { DataTypes, Model } from 'sequelize';
import { Course } from '../interfaces/course.interface';
import Server from '../server/server';
import { StudentCourseSequelize } from './student-course.sequelize';
import { ScoreSequelize } from './score.sequelize';
import { AttendanceSequelize } from './attendance.sequelize';

const sequelize = Server.sequelize;

export class CourseSequelize extends Model implements Course {
  id!: number;
  year!: number;
  status!: boolean;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idEmployee!: number;
  idCriterion!: number;
  idArea!: number;
  idGrade!: number;
  idShift!: number;
}

CourseSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: 'course',
    sequelize
  }
);

CourseSequelize.hasMany(StudentCourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idCourse',
  as: 'student-courses'
});

CourseSequelize.hasMany(ScoreSequelize, {
  sourceKey: 'id',
  foreignKey: 'idCourse',
  as: 'scores'
});

CourseSequelize.hasMany(AttendanceSequelize, {
  sourceKey: 'id',
  foreignKey: 'idCourse',
  as: 'attendances'
});
