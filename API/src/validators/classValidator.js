import Joi from 'joi';

const classSchema = Joi.object({
  name: Joi.string().min(3).required(),
  limit: Joi.number().required(),
  dayStudy: Joi.string().required(),
});

export default classSchema;
