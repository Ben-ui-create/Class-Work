import Joi from 'joi';

export default {
  create: Joi.object({
    title: Joi.string().min(3).max(120).required(),
    body:  Joi.string().min(1).required(),
    tags:  Joi.array().items(Joi.string().min(1).max(30)).max(10).default([]),
  }),
  update: Joi.object({
    title: Joi.string().min(3).max(120).required(),
    body:  Joi.string().min(1).required(),
  }),
  tags:   Joi.object({ tags: Joi.array().items(Joi.string().min(1).max(30)).min(1).required() }),
  list:   Joi.object({
    page:  Joi.number().integer().min(1).max(1000).default(1),
    limit: Joi.number().integer().min(5).max(50).default(10),
  }),
  idParam: Joi.object({ id: Joi.number().integer().positive().required() }),
};