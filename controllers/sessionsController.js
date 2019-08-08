const express = require('express');
const bcrypt = require('bcrypt');
const sessions = express.Router();
const User = require('../models/usersModel.js');

sessions.get('/login', (req, res) => {
  res.render('sessions/newSession.ejs');
});

sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (req.body.username === "") {
      res.render('./sessions/sessionsError.ejs');
    } else if (req.body.password === "") {
      res.render("./sessions/sessionsError.ejs");
    } else if (!foundUser) {
      res.render('./sessions/sessionsError.ejs');
    } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;
      res.redirect('/fish');
    } else {
      res.render('./sessions/sessionsError.ejs');
    }
  });
});

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/fish');
  });
});

module.exports = sessions;
