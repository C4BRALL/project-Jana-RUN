const { validate: isUuid } = require('uuid');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;
    if(!isUuid(id)) {
      return response.status(400).json({ error: 'Invalid ID.'});
    }
    try {
      const user = await User.findById(id);
      response.user = user;
      if(!user) {
        return response.status(404).json({ error: 'User not found!'});
      }
    } catch(err) {
      return response.status(500).json({ error: 'User not found!' });
    }
    next();
  },

  async authorizateUser(request, response, next) {
    const authheader = request.headers.authorization;

    if(!authheader) {
      return response.status(401).send({ error: 'No token provided' });
    };

    const parts = authheader.split(' ');
    if(!parts.length === 2) {
      return response.status(404).send({ error: 'Token error' });
    };
    
    const [ scheme, token ] = parts;

    if(!/Bearer/i.test(scheme)) {
      return response.status(401).send({ error: 'Token malformated' });
    };

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if(err) return response.status(401).send({ error: 'Token invalid' });

      request.userId = decoded._id;
      
      response.send({ ok: true, user: decoded._id })
      return next();
    });
  },
}
