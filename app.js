const http = require('http');
const port = 3000;

const server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.write('This is the Homepage!');
    response.end();
  }
  if (request.url === '/about') {
    response.write(`This is the ${request.params.url} page`);
    response.end();
  }
  if (request.url === '/profile') {
    response.write(`This is the ${request.params.url} page`);
    response.end();
  }
});

server.listen(port, function () {
  console.log(`Server is listening on localhost:${port}`);
});
