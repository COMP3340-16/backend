const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const CreateUserDtoSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  is_admin: Joi.boolean().optional()
});

module.exports = DTO.new(CreateUserDtoSchema);