// @desc Register new user
// @route Method: POST ('/api/users')
// @access Public
const registerUser = (request, response) => {
  response.json({
    message: 'Register User',
  });
};

// @desc Authenticate a user
// @route Method: POST ('/api/users/login')
// @access Public
const loginUser = (request, response) => {
  response.json({
    message: 'Login User',
  });
};
// @desc Get user data
// @route Method: GET ('/api/users/me')
// @access Public

const getMe = (request, response) => {
  response.json({
    message: 'User data display',
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
