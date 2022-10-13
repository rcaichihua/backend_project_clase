import { DataTypes, Model } from 'sequelize';
import { Score } from '../interfaces/score.interface';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class ScoreSequelize extends Model implements Score {
  id!: number;
  first!: number;
  second!: number;
  average!: number;
  bimester!: number;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idCourse!: number;
  idStudent!: number;
}

ScoreSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    first: {
      type: DataTypes.DECIMAL,
      defaultValue: 0
    },
    second: {
      type: DataTypes.DECIMAL,
      defaultValue: 0
    },
    average: {
      type: DataTypes.DECIMAL,
      defaultValue: 0
    },
    bimester: {
      type: DataTypes.NUMBER,
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
    modelName: 'score',
    tableName: 'score',
    sequelize
  }
);
