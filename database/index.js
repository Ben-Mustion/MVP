const mongoose = require('mongoose');
const Beers = require('./Beers');

const mongoUri = 'mongodb://localhost/mvp';
module.exports.db = mongoose.connect(mongoUri);

module.exports.selectAll = function(callback) {
  Beers.find().sort('-checkInDate').find(function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  })
};
