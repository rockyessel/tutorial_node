const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
