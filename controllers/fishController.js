const express = require('express');
const fish = express.Router();
const Fish = require('../models/fishModel.js');
const fishSeed = require('../models/seed.js');

// INDEX
fish.get('/', (req, res) => {
  Fish.find({}, (err, eachFish) => {
    if (err) {
      console.log(err)
    }
    res.render('index.ejs', {
      fish: eachFish
    });
  });
});

// SHOW
fish.get('/:id', (req, res) => {
  Fish.findById(req.params.id, (err, thisFish) => {
    if (err) {
      console.log(err)
    }
    res.send(`showing fish with db id: ${req.params.id},${thisFish}`);

  });
});

// CALL SEED
// fish.get('/seed/newfish/viaseedfile', (req, res) => {
//   Fish.insertMany(fishSeed, (err, fish) => {
//     if (err) { console.log(err); } else {
//       res.send(fish);
//     }
//   });
// });

module.exports = fish;
