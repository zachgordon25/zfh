const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: String,
  password: String,
  isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);
module.exports = User;