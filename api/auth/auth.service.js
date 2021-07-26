const jwt = require('jsonwebtoken');
const UserService = require('../users/user.service');

const AuthService = {};

AuthService.generateAccessToken = function generateAccessToken(user) {
  const payload = {
    username: user.username,
    sub: user._id
  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(
    payload,
    process.env['JWT_SECRET'],
    options
  );
}

AuthService.registerUser = async function registerUser(newUser) {
  return await UserService.create(newUser);
}

module.exports = AuthService;
