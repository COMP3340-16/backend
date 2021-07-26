const { UnauthorizedException } = require('../errors/errors');

const admin_guard = function (req, res, next) {
  if (req.user && req.user.is_admin) return next();
  return next(UnauthorizedException);
}

module.exports = admin_guard;