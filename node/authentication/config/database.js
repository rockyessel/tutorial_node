const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to MongoDB");
  }
};

module.exports = connectDB;
