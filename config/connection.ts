import { Sequelize } from 'sequelize';
import { DB_PASSWORD, DB_USERNAME } from '../environments/server.environment';

const db: Sequelize = new Sequelize(`postgres://${DB_PASSWORD}:${DB_USERNAME}@localhost:5432/materdei`, {
  dialect: 'postgres',
  logging: false
});

export default db;
