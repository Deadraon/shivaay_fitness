const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // We will use a mock DB connection fallback if no MONGO_URI is present, 
    // but typically we'd connect here. For local ease of use, we'll connect to localhost.
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shivaay_fitness');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Do not exit process if mock fallback is fine for running locally without DB
    // process.exit(1); 
  }
};

module.exports = connectDB;
