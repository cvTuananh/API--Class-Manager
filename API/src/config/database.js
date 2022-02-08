import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import path from 'path';

dotenv.config({
  path: `${path.resolve()}/.env`,
});

const db = new Sequelize(process.env.NAM_DB, process.env.ACCOUNT_DB, '', {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
});
db.authenticate().then(() => console.log('Sucssession authentication'));
export default db;
