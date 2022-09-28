import { Sequelize } from 'sequelize';

const db: Sequelize = new Sequelize(`postgres://materuser:123456@localhost:5432/materdei`, {
  dialect: 'postgres',
  logging: false
});

export default db;
