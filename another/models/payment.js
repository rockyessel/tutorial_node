const mongoose = require('mongoose');

const userPayment = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    secret_key: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserPayment', userPayment);
