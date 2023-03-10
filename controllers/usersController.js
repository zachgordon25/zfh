const express = require('express');
const bcrypt = require('bcryptjs');
const users = express.Router();
const User = require('../models/usersModel.js');

// NEW (CLIENT)
users.get('/register', (req, res) => {
  res.render('users/newUser.ejs');
});

// ENCRYPTING PASSWORD
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  if (req.body.isAdmin === 'on') {
    req.body.isAdmin = true;
  } else {
    req.body.isAdmin = false;
  }
  User.create(req.body, (err, createdUser) => {
    res.redirect('/fish');
  });
});
// CREATE (SERVER)
users.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect('/');
  });
});

module.exports = users;
