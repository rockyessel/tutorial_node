const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/payment', (req, res) => {
  const { token, secret } = req.body;

  res.json({ token_key: token, secret_key: secret });
});

app.listen(PORT, (req, res) => {
  console.log('Port is running on port');
});
