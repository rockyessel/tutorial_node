const mongoose = require('mongoose');

const User = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    arch: String,
    homedir: String,
    platform: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', User);
