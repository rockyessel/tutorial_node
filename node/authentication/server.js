const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 4000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
