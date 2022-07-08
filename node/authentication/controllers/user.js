const User = require('../models/user.js');
const bcryptjs = require('bcryptjs');
const os = require('node:os');

// @desc Admin controllers //

// @desc GET Users
// @route GET/user/admin
// @access Private
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

// @desc POST User
// @route POST/user/admin
// @access Private
const createUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const usernameExists = await User.findOne({ username });
    const emailExists = await User.findOne({ email });

    if ((usernameExists && emailExists) || usernameExists || emailExists) {
      return res
        .status(400)
        .json({ error: 'Username or email already exists' });
    }

    if (!name || !username || !email || !password) {
      return res.status(400).json({ error: 'Username or email is required' });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
      arch: os.arch(),
      homedir: os.homedir(),
      platform: os.platform(),
    });

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    throw new Error('Server error: ' + error.message);
  }
};

// @desc PUT User
// @route PUT/api/admin
// @access Private
const updateUser = async (req, res) => {};

// @desc DELETE User
// @route DELETE/api/admin
// @access Private
const deleteUser = async (req, res) => {};

// @desc Visitors Controllers //

// @desc Post User
// @route POST/user/
// @access Public
const registerUser = async (req, res) => {};

// @desc Post User
// @route POST/user/login
// @access Public
const loginUser = async (req, res) => {};

// @desc Post User
// @route POST/user/profile
// @access Private
const userInfo = async (req, res) => {};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  userInfo,
};
