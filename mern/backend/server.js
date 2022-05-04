const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db.js');
const { errorHandle } = require('./middleware/errorMiddleware.js');
const port = process.env.PORT || 4000;

const app = express();

dotenv.config({ path: '.env' });

// @desc connecting to Database🍡
connectDB();

// @desc Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @desc routes
app.use('/api/goal', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// @desc error handler
// @desc Middleware
app.use(errorHandle);

// @desc express port
app.listen(port, () =>
  console.log(`Server running on: http//:localhost:${port}`)
);
