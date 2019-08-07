const express = require('express');
const bcrypt = require('bcrypt');
const users = express.Router();
const User = require('../models/usersModel.js');


// NEW (CLIENT)
users.get('/register', (req, res) => {
  res.render('users/newUser.ejs');
});

// ENCRYPTING PASSWORD
users.post('/', (req, res) => {
  if (req.body.username === "") {
    res.send('please put in a username');
  } else {
    if (req.body.password === "") {
      res.send('please put in a password');
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      User.create(req.body, (err, createdUser) => {
        res.redirect('/fish');

      });
    }
  }
});

// CREATE (SERVER)
users.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect('/');
  });
});

module.exports = users;