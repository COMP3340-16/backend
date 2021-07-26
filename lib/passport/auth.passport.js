const passport = require('passport');
const LocalStrategy = require('./LocalStrategy.passport');
const JwtStrategy = require('./JwtStrategy.passport');
const UserSerialization = require('./UserSerialization.passport');

exports.wire = function wire(app) {
  app.use(passport.initialize());
  UserSerialization.init();
  LocalStrategy.init();
  JwtStrategy.init();
}