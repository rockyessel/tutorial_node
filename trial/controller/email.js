const Email = require('../models/email');

const getEmail = async (request, response) => {
  const emails = await Email.find();
  response.status(200).json(emails);
};

const postEmail = async (request, response) => {
  const { email } = request.body;
  const emails = await Email.create({ user_email: email });
  console.log(email);
  response.json(emails);
};

const putEmail = async (request, response) => {
  response.status(200).json({
    success: 'Email updated',
    emails_address: 'Email',
  });
};
const deleteEmail = async (request, response) => {
  response.status(200).json({
    success: 'Email deleted',
    emails_address: 'Email',
  });
};

module.exports = { getEmail, postEmail, putEmail, deleteEmail };
