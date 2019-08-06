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
    res.render('./fish/index.ejs', {
      fish: eachFish,
      currentUser: req.session.currentUser
    });
  });
});


// NEW (CLIENT)
fish.get('/new', (req, res) => {
  res.render('./fish/new.ejs');
});

// EDIT
fish.get('/:id/edit', (req, res) => {
  Fish.findById(req.params.id, (err, foundFish) => {
    if (err) {
      console.log(err);
    } else {
      res.render('./fish/edit.ejs', {
        fish: foundFish
      });
    }
  });
});

// SHOW
fish.get('/:id', (req, res) => {
  Fish.findById(req.params.id, (err, thisFish) => {
    if (err) {
      console.log(err)
    }
    res.render('./fish/show.ejs', {
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

// UPDATE (SERVER)
fish.put('/:id', (req, res) => {
  Fish.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedFish) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect(`/fish/${req.params.id}`);
      }
    });
});

// BUY
fish.put('/buy/:id', (req, res) => {
  Fish.findByIdAndUpdate(
    req.params.id,
    { $inc: { qty: -1 } },
    { new: true },
    (err, updatedFish) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect(`/fish/${req.params.id}`)
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
