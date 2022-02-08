import loginSchema from '../validators/loginValidator.js';
import registerSchema from '../validators/registerValidator.js';
import classSchema from '../validators/classValidator.js';
import otp from '../validators/verifyEmailValidator.js';

const loginValidator = async (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password,
  };
  const { error } = loginSchema.validate(payload);
  if (error) {
    return res.status(400).json('email or password malformed');
  }
  next();
};

const registerValidator = async (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  };
  const { error } = registerSchema.validate(payload);
  if (error) {
    return res.status(400).json('email or password, name, malformed');
  }
  next();
};
const classValidator = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    limit: req.body.limit,
    dayStudy: req.body.dayStudy,
  };
  const { error } = classSchema.validate(payload);
  if (error) {
    return res.status(400).json('erron input data');
  }
  next();
};

const otpValidator = async (req, res, next) => {
  const payload = {
    otp: req.body.otp,
  };
  const { error } = otp.validate(payload);
  if (error) {
    return res.status(400).json('otp Malformed');
  }
  next();
};

export {
  loginValidator, registerValidator,
  classValidator, otpValidator,
};
