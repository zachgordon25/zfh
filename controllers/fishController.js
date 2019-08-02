const express = require('express');
const fish = express.Router();
const Fish = require('../models/fishModel.js');
const fishSeed = require('../models/seed.js');

// INDEX
fish.get('/', (req, res) => {
  res.render('index.ejs');
});

// SHOW


// CALL SEED
// fish.get('/seed/newfish/viaseedfile', (req, res) => {
//   Fish.insertMany(fishSeed, (err, fish) => {
//     if (err) { console.log(err); } else {
//       res.send(fish);
//     }
//   });
// });

module.exports = fish;
