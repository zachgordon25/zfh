const express = require('express');
const users = express.Router();

users.get('/register', (req, res) => {
  res.render('users/newUser.ejs');
});

module.exports = users;