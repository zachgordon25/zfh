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
    // let fishPrice = thisFish.price;
    // fishPrice.toString();
    res.render('show.ejs', {
      fish: thisFish
    });
  });
});



module.exports = fish;
