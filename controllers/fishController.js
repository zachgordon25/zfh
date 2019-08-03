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

// NEW (CLIENT)
fish.get('/new', (req, res) => {
  res.render('new.ejs')
});

// SHOW
fish.get('/:id', (req, res) => {
  Fish.findById(req.params.id, (err, thisFish) => {
    if (err) {
      console.log(err)
    }
    res.render('show.ejs', {
      fish: thisFish
    });
  });
});

// CREATE (SERVER)
fish.post('/', (req, res) => {
  Fish.create(req.body, (err, createdFish) => {
    res.redirect('/fish');
  });
});

// DELETE
fish.delete('/:id', (req, res) => {
  Fish.findByIdAndRemove(req.params.id, (err, deletedFish) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/fish');
    }
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
