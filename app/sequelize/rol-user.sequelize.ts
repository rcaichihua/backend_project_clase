import { DataTypes, Model } from 'sequelize';
import { RolUser } from '../interfaces/rol-user.interface';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class RolUserSequelize extends Model implements RolUser {
  id!: number;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idRol!: number;
  idUser!: number;
}

RolUserSequelize.init(
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
    tableName: 'rol_user',
    sequelize
  }
);
