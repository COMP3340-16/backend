const UserService = require("./user.service");
const CreateUserDto = require('./dto/create-user.dto');

const UserController = {};

UserController.findById = async function findById(userId) {
  return await UserService.findById(userId);
}

UserController.findByUsername = async function findByUsername(username) {
  return await UserService.findByUsername(username);
}

UserController.create = async function create(newUser) {
  let create_user_dto = CreateUserDto.validate(newUser);
  return await UserService.create(create_user_dto);
}

module.exports = UserController;
