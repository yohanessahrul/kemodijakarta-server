const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: String
}, {
  timestamps: true
});

const User = mongoose.model('User', schema);

module.exports = User;