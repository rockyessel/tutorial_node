const express = require('express');
const app = express();
const port = 3000;

const { products } = require('./data.js');

app.get('/', function (request, response) {
  response.send(
    "<center><h1>The Home Page</h1><br><a href='/api/products'><h3>Products</h3></a></center>"
  );
});

app.get('/api/products', function (request, response) {
  const newProduct = products.map((product, index) => {
    const { id, username, profileURL } = product;
    return { id, username, profileURL };
  });
  response.json(newProduct);
});

app.get('/api/products/:productID', function (request, response) {
  // console.log('REUEST::::::',request);
  // console.log('REUEST:PRAMSA:::::',request.params);
  const { productID } = request.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  console.log(singleProduct);

  if (!singleProduct) {
    return response
      .status(404)
      .send(`There is no product called or with the name ${productID}`);
  }
  return response.json(singleProduct);
});

app.listen(port, function () {
  console.log(`The server is running on: https://localhost:${port}`);
});
