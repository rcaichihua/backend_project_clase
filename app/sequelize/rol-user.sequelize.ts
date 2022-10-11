import { DataTypes, Deferrable, Model } from 'sequelize';
import { RolUser } from '../interfaces/rol-user.interface';
import Server from '../server/server';
import { RolSequelize } from './rol.sequelize';
import { UserSequelize } from './user.sequelize';

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
    // idRol: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: RolSequelize,
    //     key: 'id',
    //   }
    // },
    // idUser: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: UserSequelize,
    //     key: 'id',
    //   }
    // },
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

// UserSequelize.belongsToMany(RolSequelize, { through: RolUserSequelize });
// RolSequelize.belongsToMany(UserSequelize, { through: RolUserSequelize });
