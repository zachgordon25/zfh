const mongoose = require('mongoose');

const fishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  binomial: String,
  description: String,
  img: String,
  price: { type: Number, required: true, min: 0 },
  qty: { type: Number, required: true, min: 0 },
  userId: Number
});

const Fish = mongoose.model('Fish', fishSchema);
module.exports = Fish;