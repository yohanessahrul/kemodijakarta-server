const Router = require('express').Router();

const routerUser = require('./r_user');
const routerArticle = require('./r_article');
const routerGallery = require('./r_gallery');

Router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Index API',
  });
});

Router.use('/user', routerUser);
Router.use('/article', routerArticle);
Router.use('/gallery', routerGallery);

module.exports = Router;