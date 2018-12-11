module.exports = {

  getAllUsers: function (req, res) {
    res.status(200).json({
      msg: 'Get all users success 111',
      desc: 'API sudah jalan'
    });
  },
  registerUser: function (req, res) {
    res.status(200).json({
      msg: 'Register user active 111',
      desc: 'API sudah jalan'
    })
  },
  resetPassword: function (req, res) {
    res.status(200).json({
      msg: 'Reset Password success 111',
      desc: 'API sudah jalan'
    });
  },
  changeProfileUser: function (req, res) {
    res.status(200).json({
      msg: 'Change profile user success 111',
      desc: 'API sudah jalan'
    });
  },
  deleteUser: function (req, res) {
    res.status(200).json({
      msg: 'Delete user success 111',
      desc: 'API sudah jalan'
    });
  }
}