import Regiter from '../models/register.js';
import classUser from '../models/classUser.js';
import Class from '../models/class.js';
import Calendar from '../models/calendar.js';

const listRegistered = async (req, res) => {
  const registered = await Regiter.findAll(
    { where: { userId: req.userId }, include: Class },
  );
  return res.json(registered);
};

const calendarStudy = async (req, res) => {
  const classId = [];
  const user = await classUser.findAll({ where: { userId: req.userId }, include: Class });
  for (const [key, value] of Object.entries(user)) {
    classId.push(value.classId);
  }
  const calendar = await Class.findAll(
    {
      where: { id: classId },
      include: Calendar,
    },
  );
  return res.json(
    { calendar: JSON.parse(JSON.stringify(calendar)) },
  );
};

export {
  listRegistered,
  calendarStudy,
};
