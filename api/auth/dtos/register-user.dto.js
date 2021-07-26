const Joi = require('joi');
const DTO = require('../../../lib/dto/DTO');

const RegisterUserDtoSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = DTO.new(RegisterUserDtoSchema)