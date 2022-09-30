import { DataTypes, Model } from 'sequelize';
import { Area } from '../interfaces/area.interface';
import Server from '../server/server';
import { AreaEmployeeSequelize } from './area-employee.sequelize';
import { CourseSequelize } from './course.sequelize';

const sequelize = Server.sequelize;

export class AreaSequelize extends Model implements Area {
  id!: number;
  name!: string;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

AreaSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(25),
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
    tableName: 'area',
    sequelize
  }
);

AreaSequelize.hasMany(AreaEmployeeSequelize, {
  sourceKey: 'id',
  foreignKey: 'idArea',
  as: 'area-employees'
});

AreaSequelize.hasMany(CourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idArea',
  as: 'courses'
});
