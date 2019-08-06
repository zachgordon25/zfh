const express = require('express');
const sessions = express.Router();
const User = require('../controllers/usersController.js');

sessions.get('/login', (req, res) => {
  res.render('sessions/newSession.ejs');
});

sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (req.body.password === foundUser.password) {
      res.send('logged in')
    } else {
      res.send('wrong password');
    }
  })
})

module.exports = sessions;