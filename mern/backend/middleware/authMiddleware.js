const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (request, response, next) => {
  let token;

  // @desc Checking if the "request.headers.authorization" and "request.headers.authorization.startsWith('Bearer')" exist.
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith('Bearer')
  ) {
    // @desc if they exist, get the token value, verify it, and get the token from the user.
    try {
      // @desc Getting the token inside the "request.headers.authorization"
      token = request.headers.authorization.split(' ')[1];

      // @desc After getting the token, we verify it.
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log('Decoded:', decoded);

      // @desc Get user from token
      request.user = await User.findById(decoded.id).select('-password');
      // console.log('user:', user);

      next();
    } catch (error) {
      console.log(error);
      response.status(401);
      throw new Error('Not Authorized');
    }
  }

  if (!token) {
    response.status(401);
    throw new Error('Not Authorized, And Token Not Found');
  }
});

module.exports = { protect };
