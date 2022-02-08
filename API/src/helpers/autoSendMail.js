import transport from './transportEmail.js';
import Users from '../models/users.js';
import ClassUser from '../models/classUser.js';
import Class from '../models/class.js';
import Calendar from '../models/calendar.js';

const autoSendMail = async (req, res) => {
  try {
    const classsId = [];
    const date = new Date();
    const h = date.getDay();
    const calendars = await Calendar.findAll({
      where: {
        dayStudy: h,
      },
      include: Class,
    }, { raw: true });

    calendars.map((item) => { classsId.push(item.classId); });
    const listUsers = await ClassUser.findAll(
      {
        where: { classId: classsId },
        include: { all: true },
      },
      { raw: true },
    );

    listUsers.map((items) => {
      const mailOtion = {
        from: '"remid student study",Center Nodejs ',
        cc: items.user.email,
        subject: 'remid',
        html: `<h2>today you have class schedule, ${items.class.name} !!</h2>
          <p>Thank and happy study</p>
    `,
      };
      transport.sendMail(mailOtion, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Looks like this is an error from the send email' });
        }
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Looks like this is an error from the server' });
  }
};

export default autoSendMail;
