const Gallery = require('../models/m_gallery');

module.exports = {

  createGallery: function (req, res) {
    let { desc } = req.body;
    Gallery.create({
      desc: desc,
      img: req.file.cloudStoragePublicUrl
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      Gallery.find({}, function (err1, response1) {
        if (err1) {
          return console.log(err1)
        }
        console.log('--> Upload new image success');
        res.status(200).json({
          msg: 'Upload new image success',
          data: response1
        });
      })
    });
  },

  getAllGalleries: function (req, res) {
    Gallery.find({}, function(err, response) {
      if (err) {
        return console.log(err)
      }
      console.log('--> Get all galleries success');
      res.status(200).json({
        msg: 'Get all galleries success',
        data: response
      })
    })
  },

  deleteGallery: function (req, res) {
    Gallery.findByIdAndDelete({
      _id: req.params.id
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      Gallery.find({}, function (err2, response2) {
        if (err) {
          return console.log(err);
        }
        console.log('--> Delete gallery success');
        res.status(200).json({
          msg: 'Delete gallery success',
          data: response2
        });
      });
    });
  }
}