const http = require('http');

const server = http.createServer(function (request, response) {
  console.log(request);
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.write('hello');
  response.end();
});

server.listen(5000);
