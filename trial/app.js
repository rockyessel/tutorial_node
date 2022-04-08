const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
const dotenv = require('dotenv');
const {
  getEmail,
  postEmail,
  putEmail,
  deleteEmail,
} = require('./controller/email.js');

const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dotenv.config({ path: '.env' });
connectDB();

app.get('/emails', getEmail);
app.post('/emails', postEmail);
app.put('/emails/:id', putEmail);
app.delete('/emails/:id', deleteEmail);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
