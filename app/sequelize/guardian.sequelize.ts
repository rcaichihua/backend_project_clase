import { DataTypes, Model } from 'sequelize';
import { Guardian } from '../interfaces/guardian.interface';
import Server from '../server/server';
import { StudentSequelize } from './student.sequelize';

const sequelize = Server.sequelize;

export class GuardianSequelize extends Model implements Guardian {
  id!: number;
  dni!: string;
  lastName!: string;
  name!: string;
  email!: string;
  phone!: number;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idGender!: number;
}

GuardianSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    dni: {
      type: DataTypes.STRING(20),
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
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
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
    tableName: 'guardian',
    sequelize
  }
);

GuardianSequelize.hasMany(StudentSequelize, {
  sourceKey: 'id',
  foreignKey: 'idGuardian',
  as: 'students'
});
