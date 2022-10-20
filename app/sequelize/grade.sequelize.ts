import { DataTypes, Model } from 'sequelize';
import { Grade } from '../interfaces/grade.interface';
import Server from '../server/server';
import { CourseSequelize } from './course.sequelize';

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
      autoIncrement: true,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(20),
      allowNull: false,
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
    modelName: 'grade',
    tableName: 'grade',
    sequelize,
  }
);

GradeSequelize.hasMany(CourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idGrade',
  as: 'courses',
});

CourseSequelize.belongsTo(GradeSequelize, {
  targetKey: 'id',
  foreignKey: 'idGrade',
});
