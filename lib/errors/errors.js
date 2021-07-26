class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;

    if (this instanceof BadRequestException) {
      this.status = 400;
    } else if (this instanceof NotFoundException) {
      this.status = 404;
    } else if (this instanceof UnauthorizedException) {
      this.status = 401;
      this.message = this.message || 'Unauthorized';
    } else {
      this.status = 500;
    }
  }
}

class BadRequestException extends GeneralError { }
class NotFoundException extends GeneralError { }
class UnauthorizedException extends GeneralError { }

module.exports = {
  GeneralError,
  NotFoundException,
  BadRequestException,
  UnauthorizedException
};