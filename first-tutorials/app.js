const express = require('express');
const app = express();
const port = 4000;
let { people } = require('./data.js');

app.use(express.static('./method-public'));

app.use(express.urlencoded({ extended: false }));
//URl-Encoding general definition
// "URL Encoding" converts reserved, unsafe, and non-ASCII characters in URLs to a format that is
// universally accepted and understood by all web browsers and servers.
// It first converts the character to one or more bytes.
// Then each byte is represented by two hexadecimal digits preceded by a percent sign (%) - (e.g. %xy).
// The percent sign is used as an escape character.

//express definition of urlencoding
// is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
// This method is called as a middleware in your application using the code: app.use(express.urlencoded());
app.use(express());

app.get('/api/people', function (request, response) {
  response.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' });
  }
  res.status(201).json({ success: true, person: name });
});

app.post('/login', function (request, response) {
  const { textarea, age, username, category } = request.body;
  console.log(request.body);
  if (textarea && age && username && category) {
    return response
      .status(200)
      .send(`Welcome ${textarea} \n ${username} \n ${age} \n ${category}`);
  } else if (!textarea && !age && !username && !category) {
    return response.status(404).send(`Please provide a all required! info`);
  }
});

app.listen(port || 4000, function (request, response) {
  console.log(`Server is running on: https://localhost:${port || 4000}`);
});
