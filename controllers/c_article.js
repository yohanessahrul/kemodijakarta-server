const Article = require('../models/m_article');
const moment = require('moment');
// const { Translate } = require('@google-cloud/translate');
// const projectId = process.env.GCLOUD_PROJECT;
// const translate = new Translate({
//   projectId: projectId
// })

module.exports = {
  
  getAllArticles: function (req, res) {
    Article.find({} , function (err, response) {
      if (err) {
        return console.log(err);
      }
      console.log('--> Get all articles success');
      
      let newData = []
      for (let i = 0; i < response.length; i++) {
        let newDate = moment(Date.now()).to(response[i].createdDate);
        
        let _id = response[i]._id
        let judul = response[i].judul
        let isi = response[i].isi
        let img = response[i].img
        let createdDate = 'Last updated ' + newDate
        let view = response[i].view
        let createdAt = response[i].createdAt
        let updatedAt = response[i].updatedAt

        let payload = { _id, judul, isi, img, createdDate, view, createdAt, updatedAt }
        newData.push(payload)
      }
      res.status(200).json({
        msg: 'Get all articles success',
        data: newData
      });
    });
  },

  createArticle: function (req, res) {
    const { judul, isi, img } = req.body;
    Article.create({
      judul: judul,
      isi: isi,
      img: img,
      createdDate: new Date(),
      view: 0
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
    console.log('REQ BODY ==> ', req.body.img)
    Article.findByIdAndUpdate({
      _id: req.params.id
    }, {
      img: req.body.img
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      if (response) {
        Article.find({}, function (err1, response1) {
          if (err1) {
            return console.log(err1)
          }
          console.log('--> Update image article success')
          res.status(200).json({
            msg: 'Update image article success',
            data: response1
          });
        });
      }
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
  },

  getArticleById: function (req, res) {
    Article.findById({
      _id: req.params.id
    }, function (err, response) {
      if (err) {
        return console.log(err)
      }
      console.log('--> Get article by id success')
      res.status(200).json({
        msg: 'Get article by id success',
        data: response
      })
    })
  }

}