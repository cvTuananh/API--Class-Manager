import jwt from 'jsonwebtoken';
import Users from '../models/users.js';
import transport from '../helpers/transportEmail.js';

const createToken = (id) => { return jwt.sign({ id }, process.env.SCRECT_KEY) };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // chỗ này không mã hóa password nên sẽ gắn chung mà không tách ra
    const findUser = await Users.findOne({ where: { email, password } });
    if (findUser) {
      const token = createToken(findUser.id);
      return res.json({ token, findUser: JSON.parse(JSON.stringify(findUser)) });
    }
    return res.status(400).json('can not find user');
  } catch (err) {
    res.status(404).json(err);
  }
};
const profileUser = async (req, res) => {
  const user = await Users.findOne({ where: { id: req.userId } });
  return res.json(user);
};

const register = async (req, res) => {
  try {
    const emailUser = await Users.findOne({
      where: { email: req.body.email },
    });
    if (emailUser) {
      return res.json('email uesed');
    }
    const user = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file.filename,
      otp: Math.floor(Math.random() * 900) + 100,
      isVerifiled: false,
    });
    const mailOtion = {
      from: '"verified your email",<tuananhcuvi@gmail.com>',
      to: user.email,
      subject: 'verified your account class Nodejs',
      html: `<h2>${user.name}! Thanks for register with we</h2>
                    <p>Please verify your code email continue</p>
                    <p>${user.otp}</p>
                    <p>Happ nicee</p>
            `,
    };
    transport.sendMail(mailOtion, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
const verifyEmail = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = await Users.findOne({ where: { otp } });
    if (user) {
      await user.update(
        { isVerifiled: true, otp: null },
        { where: { isVerifiled: false } },
      );
    } else {
      return res.json('email is not verified');
    }
  } catch (err) {
    res.status(500).json({ message: 'Looks like this is an error from the server' });
  }
};
const updateAvatar = async (req, res) => {
  try {
    await Users.update(
      { avatar: req.file.filename },
      {
        where: {
          id: req.userId,
        },
      },
    );
    res.json('success');
  } catch (error) {
    res.status(500).json({ message: 'Looks like this is an error from the server' });
  }
};
const changePassword = async (req, res) => {
  const user = await Users.findOne({
    where: { id: req.userId, password: req.body.password },
  });
  if (user) {
    return res.json('password new is not same password old');
  }
  Users.update(
    { password: req.body.password },
    {
      where: {
        id: req.userId,
      },
    },
  );
  return res.json('success');
};
export {
  login,
  register,
  verifyEmail,
  changePassword,
  updateAvatar,
  profileUser,
};
