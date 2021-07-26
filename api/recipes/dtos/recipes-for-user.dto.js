const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const RecipesForUserDtoSchema = Joi.object({
  userId: Joi.string().required(),
});

module.exports = DTO.new(RecipesForUserDtoSchema);