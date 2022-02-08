import Register from '../models/register.js';
import ClassUser from '../models/classUser.js';
import Users from '../models/users.js';
import transport from '../helpers/transportEmail.js';

const listRegisterClass = async (req, res) => {
  const register = await Register.findAll(
    {
      where: { status: 'pending' },
      include: { all: true },
    },
    { raw: true },
  );
  return res.json(JSON.parse(JSON.stringify(register)));
};

const updateStatus = async (req, res) => {
  try {
    await Register.update(
      { status: req.body.result },
      { where: { id: req.params.id } },
    );
  } catch (error) {
    return res.status(500).json({ message: 'Looks like this is an error from the server' });
  }
};

const addUserClass = async (req, res) => {
  try {
    // truy van trong form đăng kí để lấy dữ liệu sau đó thêm vào bản ClassUser
    const accept = await Register.findOne({
      where: {
        id: req.params.id,
      },
      include: Users,
    }, { raw: true });
    if (!accept) {
      return res.json('There is no application form for the course');
    }
    await ClassUser.create({
      userId: accept.userId,
      classId: accept.classId,
    });
    const mailOtion = {
      from: '"Reult register class",<Center Nodejs>',
      to: accept.user.email,
      subject: 'About Browse the application form class',
      html: `<h2>Thanks you were spent a little time with we</h2>
                  <p>Browse the application form class ${accept.status}</p>
                  <p>Happ nicee</p>
          `,
    };
    transport.sendMail(mailOtion, (err) => {
      if (err) {
        res.status(500).json('can not send email', err);
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Looks like this is an error from the server' });
  }
};

export {
  listRegisterClass, updateStatus, addUserClass,
};
