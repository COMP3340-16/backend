const Joi = require('joi');
const { BadRequestException } = require('../errors/errors');

const DTO = {};

DTO.new = function (schema) {
  if (!(schema instanceof Joi.constructor)) {
    throw new Error("must supply valid joi schema");
  }

  return {
    schema,
    validate: function (requestBody) {
      const validated = this.schema.validate(requestBody, {
        stripUnknown: true
      });
      if (validated.error) {
        throw new BadRequestException(validated.error);
      } else {
        return validated.value;
      }
    }
  }
}

module.exports = DTO;