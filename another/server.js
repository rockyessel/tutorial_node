const express = require('express');
const PORT = process.env.PORT || 3000;
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const app = express();

connectDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/payment', require('./routes/payment.js'));

app.listen(PORT, (req, res) => {
  console.log('Port is running on port');
});
