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
  console.log('REUEST:PRAMSA:::::', request.params);
  const { productID } = request.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  //The find() method return the first string inside an array or object.

  console.log(singleProduct);

  if (!singleProduct) {
    return response
      .status(404)
      .send(
        `There is no product called or with the name <h1>${productID}</h1>`
      );
  }
  return response.json(singleProduct);
});

app.get(
  '/api/products/:productID/reviews/:reviewID',
  function (request, response) {
    const { reviewID } = request.params;
    console.log(reviewID);
    response.send('Hello World');
  }
);

app.get('/api/v1/query', function (request, response) {
  const { search, limit } = request.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product, index) => {
      return product.username.startsWith(search);
    });
  }
  if (limit) {
    return (sortedProducts = sortedProducts.slice(0, Number(limit)));
  }

  return response.status(200).json(sortedProducts);

  if (sortedProducts < 1) {
    return response.status(200).send('no products');
  }
});

app.listen(port, function () {
  console.log(`The server is running on: https://localhost:${port}`);
});

const a = ['Rose', 'Dahlia', 'Magnolia', 'Tulip', 'Daisy'];
console.log(a.find((a, i) => i));
