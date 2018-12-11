module.exports = {

  getAllArticles: function (req, res) {
    res.status(200).json({
      msg: 'Get all articles success',
      desc: 'API sudah jalan'
    });
  },
  createArticle: function (req, res) {
    res.status(200).json({
      msg: 'Created article success',
      desc: 'API sudah jalan'
    });
  },
  changeImageArticle: function (req, res) {
    res.status(200).json({
      msg: 'Change image success',
      desc: 'API sudah jalan'
    });
  },
  changeArticle: function (req, res) {
    res.status(200).json({
      msg: 'Change article success',
      desc: 'API sudah jalan'
    });
  },
  deleteArticle: function (req, res) {
    res.status(200).json({
      msg: 'Delete article success',
      desc: 'API sudah jalan'
    });
  }

}