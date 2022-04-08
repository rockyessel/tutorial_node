const getEmail = (request, response) => {
  response.status(200).json({
    success: 'Email gotten',
    emails_address: 'Email',
  });
};

const postEmail = (request, response) => {
  response.status(200).json({
    success: 'Email added',
    emails_address: 'Email',
  });
};

const putEmail = (request, response) => {
  response.status(200).json({
    success: 'Email updated',
    emails_address: 'Email',
  });
};
const deleteEmail = (request, response) => {
  response.status(200).json({
    success: 'Email deleted',
    emails_address: 'Email',
  });
};

module.exports = { getEmail, postEmail, putEmail, deleteEmail };
