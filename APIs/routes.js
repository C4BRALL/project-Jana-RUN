const express = require('express');
const routes = express.Router();
const userController = require('./controllers/AuthController');
const UserMiddlewares = require('./middlewares/UserMiddlewares');

routes.get('/users', userController.index);

routes.post('/users', userController.store);

routes.post('/authenticate', userController.authenticateUser);

routes.get('/app', (req, res) => res.send({ok: true}));

routes.put('/users/:id', UserMiddlewares.validateId, userController.update);

routes.delete('/users/:id', UserMiddlewares.validateId, userController.delete);

module.exports = routes;