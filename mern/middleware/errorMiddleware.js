const errorHandle = (error, request, response, next) => {
  const statusCode = response.statusCode ? response.statusCode : 500;

  console.log(response.statusCode);
  response.status(statusCode);

  response.json({
    massage: `Please fill out the require field`,
    Error_Massage: error.massage,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

module.exports = {
  errorHandle,
};
