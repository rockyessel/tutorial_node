const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/customer', (req, res) => {
  const { email, first_name, last_name, phone } = req.body;

  const obj = {
    email,
    first_name,
    last_name,
    phone,
  };

  const createCustomer = async () => {
    const response = await fetch('https://api.paystack.co/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer sk_test_fde3713f6c4a99df24a06dfd317837bfd5b63492`,
      },
      body: JSON.stringify(obj),
    });

    const data = await response.json();
    console.log('Payload: ' + JSON.stringify(data));
  };

  res.statusCode !== 200 &&
    res.status(200).json({
      message: 'Successfully created',
    });
});

app.listen(PORT, () => {
  console.log('Express server listening on port');
});
