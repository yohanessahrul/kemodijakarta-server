const UserModel = require('../models/m_user');
const jwt = require('jsonwebtoken');

module.exports = {
  cekToken: function (req, res, next) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decodeResult) {
      if (err) {
        console.log(err)
        return console.log('--> Middleware catch you, your token invalid')
      }
      console.log('Middleware oke')
      return next();
    })
  }
}