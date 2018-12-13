const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  judul: String,
  isi: String,
  img: String,
  createdDate: Date,
  view: Number
}, {
  timestamps: true
});

const Article = mongoose.model('Article', schema);

module.exports = Article;