const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const CreateRecipeDtoSchema = Joi.object({
  title: Joi.string().required(),
  type: Joi.string().required(),
  ingredients: Joi.array().items(Joi.string()).min(1),
  instructions: Joi.string().required()
});

module.exports = DTO.new(CreateRecipeDtoSchema);