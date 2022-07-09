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
// @route PUT/user/admin/:id
// @access Private
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return {
        status: 404,
        message: 'User not found',
      };
    }

    const user = await User.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
  }
};

// @desc DELETE User
// @route DELETE/user/admin/:id
// @access Private
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    res
      .status(200)
      .json({ user: user.name, id: id, msg: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
  }
};

// @desc Visitors Controllers //

// @desc Post User
// @route POST/user/
// @access Public
const registerUser = async (req, res) => {
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

// @desc Post User
// @route POST/user/login
// @access Public
const loginUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: 'Username or password is required' });
    }

    const usernameExists = await User.findOne({ username });
    const emailExists = await User.findOne({ email });

    if (!usernameExists || !emailExists) {
      res.status(404).json({
        error:
          'Username or Email is not found in our server. Try creating a new account.',
      });
    }

    if (
      (usernameExists || emailExists) &&
      (await bcryptjs.compare(password, usernameExists.password))
    ) {
      res.status(200).json({
        _id: usernameExists.id,
        name: usernameExists.name,
        email: usernameExists.email,
        password: usernameExists.password,
        arch: os.arch(),
        homedir: os.homedir(),
        platform: os.platform(),
      });
    } else {
      res.status(400);
      throw new Error('Invalid username and password');
    }
  } catch (error) {
    console.error(error);
  }
};

// @desc Post User
// @route POST/user/profile
// @access Private
const userInfo = async (req, res) => {
  res.status(200).json({
    on_profile_page: true,
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  userInfo,
};
