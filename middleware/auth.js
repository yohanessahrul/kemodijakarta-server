module.exports = {
  cekToken: function (req, res, next) {
    if (req.headers.token === 'haha') {
      return next();
    }
    res.status(200).json({
      httpStatus: 401,
      desc: 'Unauthorized !'
    });
  }
}