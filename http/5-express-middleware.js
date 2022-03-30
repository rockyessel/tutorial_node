const express = require('express');
const app = express();
const port = 3000;
const logger = require('./logger.js');
const authorized = require('./authorized.js');
const morgan = require('morgan');
// request => middleware => response
app.use(morgan('tiny'));
// app.use([authorized, logger]);
// when using the middleware, the first argument is the path and the second is the callback function.
// the "app.use(path, function)".
// this will only affect the specified path. eg "app.use('/', function())" will only affect any "url" after the "/".
// the same goes for the "app.use('/api/product', function())" meaning that any "url" after the product, will be affected by the middleware

app.get('/', function (request, response) {
  const { user } = request.query;
  console.log((request.user = 2));
  response.status(200).send('Home');
});

app.get('/about', function (request, response) {
  response.send('About');
});

app.get('/api/products', function (request, response) {
  response.send('Products');
});

app.get('/api/v1/query', function (request, response) {
  response.send('Search');
});

app.listen(port, function () {
  console.log(`Server is running on: https//:localhost:${port}`);
});
