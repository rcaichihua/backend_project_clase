import { DataTypes, Model } from 'sequelize';
import { Payment } from '../interfaces/payment.interface';
import Server from '../server/server';

const sequelize = Server.sequelize;

export class PaymentSequelize extends Model implements Payment {
  id!: number;
  year!: number;
  march!: number;
  april!: number;
  may!: number;
  june!: number;
  july!: number;
  august!: number;
  september!: number;
  october!: number;
  november!: number;
  december!: number;
  readonly updatedAt!: Date;
  readonly createdAt!: Date;
  idStudent!: number;
}

PaymentSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    march: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    april: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    may: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    june: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    july: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    august: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    september: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    october: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    november: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    december: {
      type: DataTypes.DECIMAL,
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
    modelName: 'payment',
    tableName: 'payment',
    sequelize,
  }
);
