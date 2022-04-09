// @desc Register new user
// @route Method: POST ('/api/users')
// @access Public
const registerUser = (request, response) => {
  response.json({
    message: 'Register User',
  });
};

module.exports = {
  registerUser,
};
