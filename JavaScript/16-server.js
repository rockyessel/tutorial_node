const http = require('http');
const port = 3000;

const server = http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.write(`Hello World`);
  console.log(`Hello World`);
  response.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port} `);
});
