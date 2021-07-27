const UserService = require("./user.service");
const CreateUserDto = require('./dto/create-user.dto');
const UpdateUserDto = require('./dto/update-user.dto');

const UserController = {};

UserController.findAll = async function findAll() {
  return await UserService.findAll();
}

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

UserController.update = async function update(userUpdate) {
  let update_user_dto = UpdateUserDto.validate(userUpdate);
  console.log(update_user_dto);
  return await UserService.update(update_user_dto);
}

module.exports = UserController;
