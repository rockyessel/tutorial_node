const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('./public'));

app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, './html/index.html'));
});

app.all('*', function (request, response) {
  response
    .status(404)
    .send(
      "<center><h1>The page your looking for is unavailable</h1><br><a href='http://localhost:3000/'>Home</a></center>"
    );
});

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
