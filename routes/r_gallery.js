const Router = require('express').Router();
const ControllerGallery = require('../controllers/c_gallery');

const upload = require('../middleware/upload');

Router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Index routing for module Gallery',
    desc: 'Dalam API route ini dapat membuat, membaca, mengedit dan menghapus Gallery'
  });
});

Router.post('/creategallery', upload.multer.single('img'), upload.sendUploadToGCS, ControllerGallery.createGallery);
Router.get('/getallgalleries', ControllerGallery.getAllGalleries);
Router.delete('/deletegallery/:id', ControllerGallery.deleteGallery);

module.exports = Router;