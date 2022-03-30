const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (request, response) {
  console.log(`user hit the server`);
  response.status(200).send('Home page');
});

app.get('/about', function (request, response) {
  console.log(`user hit the about page on the server`);
  response.status(200).send('About Page');
});

app.all('*', function (request, response) {
  response
    .status(404)
    .send(
      '<center><h1>The page your looking for is unavailable.</h1></center>'
    );
});

app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
