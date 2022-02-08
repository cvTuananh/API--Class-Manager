import Joi from 'joi';

const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required(),
  name: Joi.string().min(5).required(),
  avatar: Joi.string(),
});

export default registerSchema;
