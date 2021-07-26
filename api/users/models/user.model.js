const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  is_admin: { type: Boolean, default: false },
}, { timestamps: true });

UserSchema.methods.validPassword = function validPassword(plaintext) {
  return bcrypt.compare(plaintext, this.password);
}

module.exports = mongoose.model('User', UserSchema);