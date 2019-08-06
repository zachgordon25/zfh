const express = require('express');
const sessions = express.Router();
const User = require('../models/usersModel.js');

sessions.get('/login', (req, res) => {
  res.render('sessions/newSession.ejs');
});

sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (req.body.password === foundUser.password) {
      req.session.currentUser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
    }
  });
});

module.exports = sessions;