const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const UpdateUserDtoSchema = Joi.object({
  _id: Joi.string().required(),
  is_admin: Joi.boolean().required()
});

module.exports = DTO.new(UpdateUserDtoSchema);