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
      res.send('please put in a valid username');
    } else if (req.body.password === "") {
      res.send("please put in a valid password");
    } else if (!foundUser) {
      res.send('wrong username');
    } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      req.session.currentUser = foundUser;
      res.redirect('/fish');
    } else {
      res.send('wrong password');
    }
  });
});

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/fish');
  });
});

module.exports = sessions;