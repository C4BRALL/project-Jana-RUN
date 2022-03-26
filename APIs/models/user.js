const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: 'string',
    required: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: 'string',
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =  mongoose.model('Users', userSchema);