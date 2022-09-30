import { DataTypes, Model } from 'sequelize';
import { Shift } from '../interfaces/shift.interface';
import Server from '../server/server';
import { CourseSequelize } from './course.sequelize';

const sequelize = Server.sequelize;

export class ShiftSequelize extends Model implements Shift {
  id!: number;
  name!: string;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

ShiftSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
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
    tableName: 'shift',
    sequelize
  }
);

ShiftSequelize.hasMany(CourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idShift',
  as: 'courses'
});
