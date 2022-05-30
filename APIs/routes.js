const express = require('express');
const routes = express.Router();
const userController = require('./controllers/AuthController');
const UserMiddlewares = require('./middlewares/UserMiddlewares');

routes.get('/users', userController.index);

routes.post('/register', userController.store);

routes.post('/authenticate', userController.authenticateUser);

routes.get('/', UserMiddlewares.authorizateUser);

routes.put('/user/:id', UserMiddlewares.validateId, userController.update);

routes.delete('/user/:id', UserMiddlewares.validateId, userController.delete);

module.exports = routes;