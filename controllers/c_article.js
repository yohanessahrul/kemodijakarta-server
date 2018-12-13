const Article = require('../models/m_article');
const Gallery = require('../models/m_gallery');

module.exports = {
  
  getAllArticles: function (req, res) {
    Article.find({} , function (err, response) {
      if (err) {
        return console.log(err);
      }
      console.log('--> Get all articles success');
      res.status(200).json({
        msg: 'Get all articles success',
        data: response
      });
    });
  },

  createArticle: function (req, res) {
    const { judul, isi, img } = req.body;
    Article.create({
      judul: judul,
      isi: isi,
      img: img,
      createdDate: new Date()
    }, function (err, response) {
      if (err) {
        return console.log(err);
      }
      console.log('--> Create new article success');
      res.status(200).json({
        msg: 'Created article success',
        data: response
      });
    });
  },

  changeImageArticle: function (req, res) {
    Gallery.findOne({
      _id: req.params.idimage
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      Article.findOneAndUpdate({
        _id: req.params.id
      }, {
        img: response.img
      }, function (err2, response2) {
        if (err2) {
          return console.log(err2);
        }
        console.log('--> Image change success');
        res.status(200).json({
          msg: 'Image change success',
          // data: response2
        });
      });
    });
  },

  changeArticle: function (req, res) {
    let { judul, isi } = req.body;
    console.log(judul, isi)
    Article.findByIdAndUpdate({
      _id: req.params.id
    }, {
      judul: judul,
      isi: isi
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      Article.findOne({
        _id: req.params.id
      }, function (err2, response2) {
        if (err2) {
          return console.log(err2)
        }
        res.status(200).json({
          msg: 'Change article success',
          data: response2
        })
      })

    });
  },

  deleteArticle: function (req, res) {
    Article.findByIdAndDelete({
      _id: req.params.id
    }, function (err, response) {
      if (err) {
        return console.log(err);
      }
      Article.find({} , function (err2, response2) {
        if (err2) {
          return console.log(err2)
        }
        console.log('--> Delete article success')
        res.status(200).json({
          msg: 'Delete article success',
          data: response2
        });
      });
    });
  }

}