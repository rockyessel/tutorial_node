const express = require('express');
const {
  getEmail,
  postEmail,
  putEmail,
  deleteEmail,
} = require('./controller/email.js');
const connectDB = require('./config/db.js');
const app = express();

const port = 3000;

dotenv.config({ path: '.env' });
connectDB();

app.get('/emails', getEmail);
app.post('/emails', postEmail);
app.put('/emails/:id', putEmail);
app.delete('/emails/:id', deleteEmail);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
