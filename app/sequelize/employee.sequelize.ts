import { DataTypes, Model } from 'sequelize';
import { Employee } from '../interfaces/employee.interface';
import Server from '../server/server';
import { CourseSequelize } from './course.sequelize';

const sequelize = Server.sequelize;

export class EmployeeSequelize extends Model implements Employee {
  id!: number;
  dni!: string;
  lastName!: string;
  name!: string;
  birthday!: Date;
  email!: string;
  phone!: string;
  status!: boolean;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idUser!: number;
}

EmployeeSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    dni: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(11),
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
    tableName: 'employee',
    sequelize
  }
);

EmployeeSequelize.hasMany(CourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idEmployee',
  as: 'courses'
});
