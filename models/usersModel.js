const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);
module.exports = User;