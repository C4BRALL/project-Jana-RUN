const express = require('express');
const { v4: uuid } = require('uuid');
const { response } = require('express');
const User = require('../models/user');
const { update } = require('../models/user');
const routes = express.Router();

module.exports = {
  async index(request, response) {
    try {
      const user = await User.find();
      return response.status(200).json({ user });
    } catch (err) {
      response.status(500).json({ error: 'User already exists!' });
    }
  },

  async store(request, response) {
    const { name, email, password, createdAt } = request.body;

    if( !name || !email || !password ) {
      return response.status(400).json({ error: 'Missing username or e-mail.' });
    }

    const user = new User({
      _id: uuid(),
      name,
      email,
      password,
      createdAt
    })

    try {
      await user.save();
      return response.status(201).json({ message: 'user created succesfully!' });
    } catch (err) {
      response.status(400).json({ error: 'User already exists!' });
    }
  },
  
  async update(request, response) {
    const { name, email, password, createdAt } = request.body;

    if(!name && !email && !password ) {
      return response.status(400).json({ error: "You must inform a new name or a new email" });
    }

    if(name) response.user.name = name;
    if(email) response.user.email = email;
    if(password) response.user.password = password;

    try {
      await response.user.save();
      return response.status(202).json({ message: "User updated succesfully!" });
    } catch (err) {
      return response.status(500).json({ error: 'User not found!' });
    }
  },

  async delete(request, response) {
    try {
      await response.user.remove();
      return response.status(200).json({ message: "User deleted succesfully!" });
    } catch (err) {
      return response.status(500).json({ error: 'User not found!' });
    }
  },
};
