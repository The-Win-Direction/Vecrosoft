const mongoose = require('mongoose');
//const uri = process.env.DATABASE; 
const uri="mongodb+srv://giridipak743:vecrosoftdb@cluster0.wzdjwvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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