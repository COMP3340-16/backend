const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const UpdateRecipeDtoSchema = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().optional(),
  type: Joi.string().optional(),
  ingredients: Joi.array().items(Joi.string()).min(1).optional(),
  instructions: Joi.string().optional()
});

module.exports = DTO.new(UpdateRecipeDtoSchema);