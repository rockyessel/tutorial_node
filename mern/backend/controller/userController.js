const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Register new user
// @route Method: POST ('/api/users')
// @access Public
const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  // @desc Checking if any of the request.body is an empty string
  if (!name || !email || !password) {
    throw new Error('Please provide a name, email and a password');
  }

  // @desc **Checking if the user is/has already registered** //
  // @desc validation for already existing users
  const userExist = await User.findOne({ email });
  // @desc if user has already registered, throw a new error.
  if (userExist) {
    response.status(400);
    throw new Error('User already exists');
  }

  // @desc Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // @desc creating a new user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    response.status(201);
    response.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    response.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Authenticate/Logging-in a user
// @route Method: POST ('/api/users/login')
// @access Public
const loginUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  // Check for the user email address
  const user = await User.findOne({ email });

  // @desc if the user doesn't exist, throw a new error
  if (!user) {
    response.status(404);
    throw new Error('User not found');
  }

  //Comparing the user email, and password if it matched the registered details at "/registerUser"
  // @desc validating if the "password" is a exact match to the hashed-password "user.password"
  // in this (**bcrypt.compare(password, user.password)**)
  if (email && bcrypt.compare(password, user.password)) {
    response.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    response.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Get user data
// @route Method: GET ('/api/users/me')
// @access Private
const getMe = asyncHandler(async (request, response) => {
  response.status(200).json(request.user);
});
// @desc Generate JSON Web Token(JWT)
const generateJWT = (id) => {
  console.log('id:', id);
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
