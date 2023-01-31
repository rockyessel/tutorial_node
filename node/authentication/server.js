const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database.js');
const PORT = process.env.PORT || 4000;

const app = express();

// @desc Making .env accessible via dotenv config
dotenv.config({ path: '.env' });

// @desc Connecting to Database
connectDB();

// @desc Express middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// @desc Routes middleware
app.use('/user', require('./routes/user.js'));
app.use('/question', require('./routes/question.js'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

