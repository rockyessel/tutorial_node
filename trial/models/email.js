const mongoose = require('mongoose');

const emailSchema = mongoose.Schema(
  {
    user_email: {
      type: String,
      require: [true, 'Please provide a valid email address'],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Email', emailSchema);
