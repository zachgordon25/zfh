// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const secret = process.env.SECRET;
const app = express();

// CONTROLLER
const fishController = require('./controllers/fishController.js');
const userController = require('./controllers/usersController.js');

// MIDDLEWARE
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/fish', fishController);
app.use('/user', userController);

// LANDING PAGE
app.get('/', (req, res) => {
  res.render('home.ejs');
});

// CONNECT TO MONGO
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ZFH'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongo database');
});


// EXPRESS LISTENER
app.listen(PORT, () => console.log('Listening on port:', PORT));