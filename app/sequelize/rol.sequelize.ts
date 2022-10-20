import { DataTypes, Model } from 'sequelize';
import { Rol } from '../interfaces/rol.interface';
import Server from '../server/server';
import { RolUserSequelize } from './rol-user.sequelize';

const sequelize = Server.sequelize;

export class RolSequelize extends Model implements Rol {
  id!: number;
  name!: string;
  description!: string;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

RolSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
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
    modelName: 'rol',
    tableName: 'rol',
    sequelize,
  }
);

RolSequelize.hasMany(RolUserSequelize, {
  sourceKey: 'id',
  foreignKey: 'idRol',
  as: 'rol-users',
});

RolUserSequelize.belongsTo(RolSequelize, {
  targetKey: 'id',
  foreignKey: 'idRol',
});
