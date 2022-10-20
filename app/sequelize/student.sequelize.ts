import { DataTypes, Model } from 'sequelize';
import { Student } from '../interfaces/student.interface';
import Server from '../server/server';
import { PaymentSequelize } from './payment.sequelize';
import { StudentCourseSequelize } from './student-course.sequelize';
import { ScoreSequelize } from './score.sequelize';
import { AttendanceSequelize } from './attendance.sequelize';

const sequelize = Server.sequelize;

export class StudentSequelize extends Model implements Student {
  id!: number;
  dni!: string;
  lastName!: string;
  name!: string;
  birthday!: Date;
  status!: boolean;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idGender!: number;
  idGuardian!: number;
  idUser!: number;
}

StudentSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    dni: {
      type: DataTypes.STRING(15),
      unique: true,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
    modelName: 'student',
    tableName: 'student',
    sequelize,
  }
);

StudentSequelize.hasMany(PaymentSequelize, {
  sourceKey: 'id',
  foreignKey: 'idStudent',
  as: 'students',
});

PaymentSequelize.belongsTo(StudentSequelize, {
  targetKey: 'id',
  foreignKey: 'idStudent',
});

StudentSequelize.hasMany(StudentCourseSequelize, {
  sourceKey: 'id',
  foreignKey: 'idStudent',
  as: 'student-courses',
});

StudentCourseSequelize.belongsTo(StudentSequelize, {
  targetKey: 'id',
  foreignKey: 'idStudent',
});

StudentSequelize.hasMany(ScoreSequelize, {
  sourceKey: 'id',
  foreignKey: 'idStudent',
  as: 'scores',
});

ScoreSequelize.belongsTo(StudentSequelize, {
  targetKey: 'id',
  foreignKey: 'idStudent',
});

StudentSequelize.hasMany(AttendanceSequelize, {
  sourceKey: 'id',
  foreignKey: 'idStudent',
  as: 'attendances',
});

AttendanceSequelize.belongsTo(StudentSequelize, {
  targetKey: 'id',
  foreignKey: 'idStudent',
});
