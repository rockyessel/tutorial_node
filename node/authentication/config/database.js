const { connect, Connection } = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await connect(process.env.MONGODB_URI);
    console.log(`Connected to ${connect.Connection.host}`);
  } catch (error) {
    throw new Error("Couldn't connect to MongoDB");
  }
};

module.exports = connectDB;
