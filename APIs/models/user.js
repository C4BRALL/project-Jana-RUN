const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports =  mongoose.model('User', userSchema);