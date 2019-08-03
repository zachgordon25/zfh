// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;

// CONTROLLER
const fishController = require('./controllers/fishController.js');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/fish', fishController);
app.use(express.static('public'));

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