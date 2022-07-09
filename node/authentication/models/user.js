const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide a email'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      trim: true,
    },
    arch: String,
    homedir: String,
    platform: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', User);
