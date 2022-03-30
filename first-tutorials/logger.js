const logger = (request, response, next) => {
  const method = request.method;
  const url = request.url;
  const year = new Date().getFullYear();
  console.log(method, url, year);
  next();
};

module.exports = logger;
