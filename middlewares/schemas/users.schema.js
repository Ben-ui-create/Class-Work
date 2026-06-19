import Joi from 'joi';

export default {
  register: Joi.object({
    name:     Joi.string().min(2).max(50).required(),
    email:    Joi.string().email().required(),
    password: Joi.string().min(4).max(32).required(),
  }),
  login: Joi.object({
    email:    Joi.string().email().required(),
    password: Joi.string().min(4).max(32).required(),
  }),
  forgot: Joi.object({ email: Joi.string().email().required() }),
  reset:  Joi.object({ password: Joi.string().min(4).max(32).required() }),
};