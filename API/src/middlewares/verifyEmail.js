import Users from '../models/users.js';

const verifyEmail = async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (user.isVerifiled) {
      next();
    } else {
      res.json('Please verified email');
    }
  } catch (errror) {
    console.log(errror);
  }
};

export default verifyEmail;
