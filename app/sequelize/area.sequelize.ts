import { DataTypes, Model } from 'sequelize';
import { Area } from '../interfaces/area.interface';
import Server from '../server/server';
import { CriterionSequelize } from './criterion.sequelize';

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
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(25),
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
    modelName: 'area',
    tableName: 'area',
    sequelize,
  }
);

AreaSequelize.hasMany(CriterionSequelize, {
  sourceKey: 'id',
  foreignKey: 'idArea',
  as: 'criteria',
});

CriterionSequelize.belongsTo(AreaSequelize, {
  targetKey: 'id',
  foreignKey: 'idArea',
});
