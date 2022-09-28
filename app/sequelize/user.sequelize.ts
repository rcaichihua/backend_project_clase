import { User } from '../interfaces/user.interface';
import { DataTypes, Model } from 'sequelize';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class UserSequelize extends Model implements User {
  id!: number;
  name!: string;
  password!: string;
  lastLogin!: Date;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

UserSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE,
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
    tableName: 'users',
    sequelize
  }
)
