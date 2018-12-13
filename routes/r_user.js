const Router = require('express').Router();
const ControllerUser = require('../controllers/c_user');
const middleware = require('../middleware/auth');

Router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Index routing for module User',
    desc: 'Dalam API route ini dapat membuat, membaca, mengedit, dan menghapus User'
  });
});

Router.get('/getallusers', middleware.cekToken, ControllerUser.getAllUsers);
Router.post('/registeruser', middleware.cekToken, ControllerUser.registerUser);
Router.put('/resetpassword/:id', middleware.cekToken, ControllerUser.resetPassword);
Router.put('/changeprofileuser/:id', middleware.cekToken, ControllerUser.changeProfileUser);
Router.delete('/deleteuser/:id', middleware.cekToken, ControllerUser.deleteUser);
Router.post('/login', ControllerUser.login);

module.exports = Router;