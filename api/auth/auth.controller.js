const AuthService = require('./auth.service');
const RegisterUserDto = require('./dtos/register-user.dto');

const AuthController = {};

AuthController.generateAccessToken = function generateAccessToken(user) {
  return AuthService.generateAccessToken(user);
}

AuthController.registerUser = async function registerUser(newUser) {
  const registerUserDto = RegisterUserDto.validate(newUser);
  return await AuthService.registerUser(registerUserDto);
}

module.exports = AuthController;