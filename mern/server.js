const express = require('express');
const dotenv = require('dotenv');
const { errorHandle } = require('./middleware/errorMiddleware.js');
const port = process.env.PORT || 3000;

const app = express();

// @desc Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @desc routes
app.use('/api/goal', require('./routes/goalRoutes'));

// @desc error handler
// @desc Middleware
app.use(errorHandle);

app.listen(port, () =>
  console.log(`Server running on: http//:localhost:${port}`)
);
