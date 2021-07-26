const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserService = require('../../api/users/user.service');
const { UnauthorizedException } = require('../errors/errors');

exports.init = function init() {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env['JWT_SECRET']
  };
  passport.use(new JwtStrategy(
    options,
    async function (jwt_payload, done) {
      const user = await UserService
        .findById(jwt_payload.sub)
        .catch(() => {
          return done(new UnauthorizedException(), false);
        });

      return done(null, user);
    }
  ))
}