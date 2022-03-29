const http = require('http');
const { readFileSync } = require('fs');
const port = 3000;

const homePage = readFileSync('./html/index.html');

const server = http.createServer(function (request, response) {
  const url = request.url;
  if (url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(homePage);
  } else if (url === '/contact') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.write("<input type='text' name='text'>");
    response.write("<input type='submit' name='submit' value='Submit'>");
    response.end('<h1>Contact Page!!! World</h1>');
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>Page not found!</h1>');
  }
});

server.listen(port);
