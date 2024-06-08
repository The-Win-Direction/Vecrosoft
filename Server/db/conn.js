const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DATABASE; 

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};

module.exports = connectDB;