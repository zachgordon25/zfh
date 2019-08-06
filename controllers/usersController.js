const express = require('express');
const users = express.Router();
const User = require('../models/usersModel.js');


// NEW (CLIENT)
users.get('/register', (req, res) => {
  res.render('users/newUser.ejs');
});

// CREATE (SERVER)
users.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect('/');
  });
});

module.exports = users;