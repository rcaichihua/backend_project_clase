import { DataTypes, Model } from 'sequelize';
import { Attendance } from '../interfaces/attendance.interface';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class AttendanceSequelize extends Model implements Attendance {
  id!: number;
  day!: Date;
  status!: boolean;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idCourse!: number;
  idStudent!: number;
}

AttendanceSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    day: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    modelName: 'attendance',
    tableName: 'attendance',
    sequelize,
  }
);
