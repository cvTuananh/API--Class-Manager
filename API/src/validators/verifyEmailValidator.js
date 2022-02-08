import Joi from 'joi';

const otp = Joi.object({
  otp: Joi.number().required(),
});

export default otp;
