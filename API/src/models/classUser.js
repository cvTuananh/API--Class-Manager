import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Class from './class.js';
import Users from './users.js';

const ClassUser = db.define('classuser', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
ClassUser.belongsTo(Users);
ClassUser.belongsTo(Class);

export default ClassUser;
