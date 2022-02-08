import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Users from './users.js';
import Class from './class.js';

const Regiter = db.define('register', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

Regiter.belongsTo(Class);
Regiter.belongsTo(Users);
export default Regiter;
