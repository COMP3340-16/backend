const User = require('./models/user.model');
const { NotFoundException } = require('../../lib/errors/errors');
const bcrypt = require('bcrypt');
const UserService = {}

async function hash_password(plaintext) {
  return await bcrypt.hash(plaintext, 10);
}

/**
 * Check if a user has admin privileges
 */
UserService.isAdmin = async function isAdmin(userId) {
  const user = await UserService.findById(userId);
  if (user.isAdmin) return true;
  return false;
}

UserService.findAll = async function findAll() {
  return await User.find();
}

/**
 * Find a user by it's unique _id
 */
UserService.findById = async function findById(userId) {
  const user = await User.findById(userId);
  if (!user) throw new NotFoundException();
  return user;
}

/**
 * Find a user by it's unique username
 */
UserService.findByUsername = async function findByUsername(username) {
  const user = await User.findOne({ username });
  if (!user) throw new NotFoundException();
  return user;
}

/**
 * Create a new user
 */
UserService.create = async function create(newUser) {
  const user = new User({
    ...newUser,
    password: await hash_password(newUser.password)
  });
  return await user.save();
}

UserService.update = async function update(userUpdate) {
  const updatedUser = await User.findByIdAndUpdate(userUpdate._id, { $set: userUpdate }, { new: true });
  return updatedUser;
}

module.exports = UserService;