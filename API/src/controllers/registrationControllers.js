import transport from '../helpers/transportEmail.js';
import Users from '../models/users.js';
import Class from '../models/class.js';
import Calendar from '../models/calendar.js';
import Regiter from '../models/register.js';

const registerClass = async (req, res) => {
  const user = await Users.findOne({ where: { id: req.userId } });
  const classes = await Class.findOne({
    where: { id: Number(req.params.classId) },
  });
  if (user && classes) {
    Regiter.create({
      name: user.name,
      userId: req.userId,
      classId: classes.id,
    });
    const mailOtion = {
      from: '"register class",<tuananhcuvi@gmail.com',
      to: user.email,
      subject: 'note register class',
      html: `<h2>${user.name} you had register subject class : ${classes.name}</h2>
            <p> welcome to us </p>
            <p>Thank</p>`,
    };
    transport.sendMail(mailOtion, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Looks like this is an error from the send email' });
      }
    });
    return res.json('successful registration');
  }
  return res.json('registration failed !!!, may not be true class code or query user');
};

const cancelClass = (req, res) => {
  Regiter.update({ status: 'cancel' }, { where: { classId: req.params.id } })
    .then(() => res.json('success'))
    .catch(() => res.status(404).json('class code wrong !!!'));
};

const listClass = async (req, res) => {
  const classed = await Class.findAll({ include: Calendar });
  return res.json(classed);
};

export { registerClass, cancelClass, listClass };
