const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const GetRecipesDtoSchema = Joi.object({
  type: Joi.string().required(),
  limit: Joi.number().positive().required(),
  page: Joi.number().min(0).required(),
});

module.exports = DTO.new(GetRecipesDtoSchema);