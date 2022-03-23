const express = require('express');
const User = require('../models/user');
const router = express.Router();;

router.post('/register', async (req, res) => {
  try {
    const user = User.create(req.body.user);

    return res.send({ user });
  } catch (err) {
    return res.send.status(404).send({ error: 'registration failed' });
  }
});

module.exports = app => app.use('/auth', router);