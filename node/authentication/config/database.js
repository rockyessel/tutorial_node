const mongoose = require('mongoose');

// use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      //   these are options to ensure that the connection is done properly
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to MongoDB Atlas");
  }
};

module.exports = connectDB;
