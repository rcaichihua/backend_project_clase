import { DataTypes, Model } from 'sequelize';
import { Grade } from '../interfaces/grade.interface';
import Server from '../server/server';
import { CourseSequelize } from './course.sequelize';
import { StudentSequelize } from './student.sequelize';

const sequelize = Server.sequelize;

export class GradeSequelize extends Model implements Grade {
  id!: number;
  grade!: number;
  level!: string;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

GradeSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    tableName: 'grade',
    sequelize
  }
);

GradeSequelize.hasMany(CourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idGrade',
  as: 'courses'
});

GradeSequelize.hasMany(StudentSequelize, {
  sourceKey: 'id',
  foreignKey: 'idGrade',
  as: 'students'
});
