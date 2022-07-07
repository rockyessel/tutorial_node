const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Register new user
// @route Method: POST ('/api/users')
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // @desc Checking if any of the request.body is an empty string
  if (!email || !name || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // @desc **Checking if the user is/has already registered** //
  // @desc validation for already existing users
  const userExists = await User.findOne({ email });
  // @desc if user has already registered, throw a new error.

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // @desc creating a new user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Authenticate/Logging-in a user
// @route Method: POST ('/api/users/login')
// "Post" because we are taking information from the user, and verifying them.
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for the user email address
  const user = await User.findOne({ email });

  // @desc if the user doesn't exist, throw a new error
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

// @desc Get user data
// @route Method: GET ('/api/users/me')
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// @desc Generate JSON Web Token(JWT)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
