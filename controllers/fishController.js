const express = require('express');
const fish = express.Router();
const Fish = require('../models/fishModel.js');

// INDEX
fish.get('/', (req, res) => {
  Fish.find({}, (err, eachFish) => {
    if (err) {
      console.log(err);
    }
    res.render('./fish/index.ejs', {
      fish: eachFish,
      currentUser: req.session.currentUser,
    });
  });
});

// SEED DATA
// const newFish = require('../models/seed.js');
// Fish.insertMany(newFish, (error, seedFish) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(seedFish);
//   }
// });

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
        fish: foundFish,
      });
    }
  });
});

// SHOW
fish.get('/:id', (req, res) => {
  Fish.findById(req.params.id, (err, thisFish) => {
    if (err) {
      console.log(err);
    }
    res.render('./fish/show.ejs', {
      fish: thisFish,
      currentUser: req.session.currentUser,
      userId: req.body.userId,
    });
  });
});

// CREATE (SERVER)
fish.post('/', (req, res) => {
  const userId = req.session.currentUser._id;
  req.body.userId = userId;
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
  Fish.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFish) => {
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
        res.redirect(`/fish/${req.params.id}`);
      }
    }
  );
});

module.exports = fish;
