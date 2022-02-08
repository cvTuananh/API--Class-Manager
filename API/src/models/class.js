import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';

const Class = db.define('class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  limit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Class.associations = (models) => {
  Class.hasMany(models.classUser);
};

export default Class;
