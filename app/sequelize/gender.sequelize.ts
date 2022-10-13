import { DataTypes, Model } from 'sequelize';
import { Gender } from '../interfaces/gender.interface';
import Server from '../server/server';
import { GuardianSequelize } from './guardian.sequelize';
import { StudentSequelize } from './student.sequelize';

const sequelize = Server.sequelize;

export class GenderSequelize extends Model implements Gender {
  id!: number;
  name!: string;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
}

GenderSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(25),
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
    modelName: 'gender',
    tableName: 'gender',
    sequelize
  }
);

GenderSequelize.hasMany(GuardianSequelize, {
  sourceKey: 'id',
  foreignKey: 'idGender',
  as: 'guardians'
});

GuardianSequelize.belongsTo(GenderSequelize, {
  targetKey: 'id',
  foreignKey: 'idGender'
});

GenderSequelize.hasMany(StudentSequelize, {
  sourceKey: 'id',
  foreignKey: 'idGender',
  as: 'students'
});

StudentSequelize.belongsTo(GenderSequelize, {
  targetKey: 'id',
  foreignKey: 'idGender'
});
