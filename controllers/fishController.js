const express = require('express');
const fish = express.Router();
const Fish = require('../models/fishModel.js');
const fishSeed = require('../models/seed.js');

// INDEX
fish.get('/', (req, res) => {
  res.send('index');
});

module.exports = fish;
