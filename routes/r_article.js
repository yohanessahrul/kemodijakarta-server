const Router = require('express').Router();
const ControllerArticle = require('../controllers/c_article');
const middleware = require('../middleware/auth');

const multer = require('multer');
const upload = multer({ dest: 'upload/' });

Router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Index routing for module Article',
    desc: 'Dalam API route ini dapat membuat, membaca, mengedit, dan menghapus Article'
  });
});

Router.get('/getallarticles', middleware.cekToken, ControllerArticle.getAllArticles);
Router.post('/createarticle', middleware.cekToken, ControllerArticle.createArticle);
Router.put('/changeimagearticle/:id/:idimage', middleware.cekToken, ControllerArticle.changeImageArticle);
Router.put('/changearticle/:id', middleware.cekToken, ControllerArticle.changeArticle);
Router.delete('/deletearticle/:id', middleware.cekToken, ControllerArticle.deleteArticle);

module.exports = Router;