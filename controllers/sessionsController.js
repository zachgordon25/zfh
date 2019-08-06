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
      res.redirect('/fish');
    } else {
      res.redirect('/sessions/login');
    }
  });
});

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/fish');
  });
});

module.exports = sessions;