const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../../api/users/user.service');
const { UnauthorizedException } = require('../errors/errors');

exports.init = function init() {
  passport.use(new LocalStrategy(
    async function (username, password, done) {
      try {
        const user = await UserService.findByUsername(username);

        const validPassword = await user.validPassword(password);
        if (!validPassword) {
          throw new UnauthorizedException();
        }

        return done(null, user);
      } catch (error) {
        return done(new UnauthorizedException(), false)
      }
    }
  ))
}