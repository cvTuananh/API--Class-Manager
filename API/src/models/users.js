import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Users = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'avatar',
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,

    },
    isVerifiled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    roles: {
      type: DataTypes.STRING,
      defaultValue: 'menber',
    },
    remindEmail: {
      type: DataTypes.STRING,
      defaultValue: 'nope',
    },
  },

);
Users.associations = (models) => {
  Users.hasMany(models.classUser);
};

export default Users;
