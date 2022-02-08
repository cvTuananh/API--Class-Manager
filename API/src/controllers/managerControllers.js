import Classs from '../models/class.js';
import Calendar from '../models/calendar.js';
import classUser from '../models/classUser.js';
import Users from '../models/users.js';
import Class from '../models/class.js';

const createClass = async (req, res) => {
  try {
    const {
      name, limit, lessonStart, lessonEnd, dayStudy,
    } = req.body;
    const classes = await Classs.create({ name, limit });
    await Calendar.create(
      {
        classId: classes.id, dayStudy, lessonStart, lessonEnd,
      },
    );
    return res.json('sucssecess');
  } catch (error) {
    console.log(error);
  }
};

const showClass = async (req, res) => {
  const classs = await Classs.findAll({ include: Calendar });
  return res.json(classs);
};

const deleteClass = async (req, res) => {
  const classID = req.params.id;
  const classs = await Classs.findOne({
    where: {
      id: classID,
    },
  });
  if (classs) {
    Classs.destroy({
      where: {
        id: classID,
      },
    });
    return res.json('done');
  }
  return res.json('can not find class');
};

const updateClass = async (req, res) => {
  const classID = req.params.id;
  const className = req.body.name;
  const { limit } = req.body;
  const classs = await Classs.findOne({
    where: {
      id: classID,
    },
  });
  if (!classs) {
    return res.json('can not find class you want update');
  }
  await Classs.update({ name: className, limit }, {
    where: {
      id: classID,
    },
  });
  return res.json('success');
};

const viewUserClass = async (req, res) => {
  try {
    const view = await classUser.findAll(
      {
        include: [
          { model: Users, required: false },
          { model: Class, required: false },
        ],
      },
    );
    return res.json(view);
  } catch (error) {
    res.status(500).json({ message: 'Looks like this is an error from the server' });
  }
};

export {
  createClass,
  showClass,
  deleteClass,
  updateClass,
  viewUserClass,
};
