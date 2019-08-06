const express = require('express');
const sessions = express.Router();

sessions.get('/login', (req, res) => {
  res.render('sessions/newSession.ejs');
});

module.exports = sessions;