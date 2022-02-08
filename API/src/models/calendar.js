import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Class from './class.js';

const Calendar = db.define('calendar', {
  dayStudy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lessonStart: {
    type: DataTypes.TIME,
    allowNull: false,

  },
  lessonEnd: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

Class.hasMany(Calendar);
Calendar.belongsTo(Class);
export default Calendar;
