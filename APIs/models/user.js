const mongoose = require('../dataBase/dataBase');

const userSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;