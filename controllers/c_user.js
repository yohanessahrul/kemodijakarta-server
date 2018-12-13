const User = require('../models/m_user');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

module.exports = {

  getAllUsers: function (req, res) {
    User.find({}, function(err, response) {
      if (err) {
        return console.log(err)
      }
      console.log('--> Get all users success')
      res.status(200).json({
        msg: 'Get all users success',
        data: response
      });
    });
  },
  registerUser: function (req, res) {
    const { username, email, password } = req.body;
    User.findOne({
      email: email
    }, function (err, responseEmailUnique) {
      if (err) {
        return console.log(err)
      }
      if (responseEmailUnique !== null) {
        res.status(200).json({
          msg: 'emailMustUnique'
        })
      } else {
        let hashPassword = bcrypt.hashSync(password, salt)
        User.create({
          username: username,
          email: email,
          password: hashPassword,
          role: 'author'
        }, function (err, response) {
          if (err) {
            return console.log(err)
          }
          console.log(`--> Register user ${username} success`)
          res.status(200).json({
            msg: `Register success`,
            data: response
          });
        });
      }
    })
  },
  resetPassword: function (req, res) {
    let { password } = req.body
    let hashPassword = bcrypt.hashSync(password, salt)
    User.findOneAndUpdate({
      _id: req.params.id
    }, {
      password: hashPassword,
    }, function (err, response) {
      if (err) {
        return console.log(err);
      }
      User.find({
        _id: req.params.id
      }, function (err2, response2) {
        if (err2) {
          return console.log(err2)
        }
        console.log(`--> Reset password ${response.username} success`)
        res.status(200).json({
          msg: 'Reset password success',
          data: response2
        });
      });
    });
  },
  changeProfileUser: function (req, res) {
    res.status(200).json({
      msg: 'Change profile user success 111',
      desc: 'API sudah jalan'
    });
  },
  deleteUser: function (req, res) {
    User.findByIdAndDelete({
      _id: req.params.id
    }, function (err, response1) {
      if (err) {
        return console.log(err)
      }
      User.find({}, function(err, response2) {
        console.log('--> Delete user success')
        res.status(200).json({
          msg: 'Delete user success',
          data: response2
        });
      });
    });
  },
  login: function (req, res) {
    const { email, password } = req.body;
    User.findOne({
      email: email
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      const comparePassword = bcrypt.compareSync(password, response.password)
      if (!comparePassword) {
        res.status(200).json({
          msg: 'passwordIncorrect'
        })
      } else {
        console.log(`--> User ${response.username} login success`)
        let payloadToken = jwt.sign({
          id: response._id,
          email: response.email,
          username: response.username,
          role: response.role
        }, process.env.JWT_SECRET)
        res.status(200).json({
          msg: 'Login success',
          token: payloadToken
        })
      }
    })
  }
}