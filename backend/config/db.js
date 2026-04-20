const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // We will use a mock DB connection fallback if no MONGO_URI is present.
    // Setting a low timeout so we don't hang the app if no DB is found.
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/shivaay_fitness', {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Skip/Error: ${error.message}`);
  }
};

module.exports = connectDB;
