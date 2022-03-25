const http = require('http');
const port = 3000;

const server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.write('<h1>This is the Homepage!</h1>');
    response.end();
  }
  if (request.url === '/about') {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    response.write(`This is the about page`);
    response.end();
  }
  if (request.url === '/profile') {
    response.write(`This is the profile page`);
    response.end();
  }
  if (request.url === '*') {
    response.write(`This page is not found`);
  }
});

server.listen(port, function () {
  console.log(`Server is listening on localhost:${port}`);
});
