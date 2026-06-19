import Joi from 'joi';

export default {
  createComment: Joi.object({
    body:  Joi.string().min(1).required(),
  }),
  updateComment: Joi.object({
    body:  Joi.string().min(1).required(),
  }),
  idParam: Joi.object({ id: Joi.number().integer().positive().required() }),
};