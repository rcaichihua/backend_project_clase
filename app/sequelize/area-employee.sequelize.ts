import { DataTypes, Model } from 'sequelize';
import { AreaEmployee } from '../interfaces/area-employee.interface';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class AreaEmployeeSequelize extends Model implements AreaEmployee {
  id!: number;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idEmployee!: number;
  idArea!: number;
}

AreaEmployeeSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
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
    tableName: 'area_employee',
    sequelize
  }
);
