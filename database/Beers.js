const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const beerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  brewery: String,
  rating: Number,
  review: String,
  checkInDate: { type: Date, default: Date.now },
  location: String,
  zipCode: Number,
},
{
  timestamps: true,
});

const Beers = mongoose.model('Beers', beerSchema);

module.exports = Beers;
