const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  desc: String,
  img: String
}, {
  timestamps: true
});

const Gallery = mongoose.model('Gallery', schema);

module.exports = Gallery;