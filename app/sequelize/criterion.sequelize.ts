import { DataTypes, Model } from 'sequelize';
import { Criterion } from '../interfaces/criterion.interface';
import Server from '../server/server';
import { CourseSequelize } from './course.sequelize';

const sequelize = Server.sequelize;

export class CriterionSequelize extends Model implements Criterion {
  id!: number;
  name!: string;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

CriterionSequelize.init(
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
    modelName: 'criterion',
    tableName: 'criterion',
    sequelize,
  }
);

CriterionSequelize.hasMany(CourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idCriterion',
  as: 'courses',
});

CourseSequelize.belongsTo(CriterionSequelize, {
  targetKey: 'id',
  foreignKey: 'idCriterion',
});
