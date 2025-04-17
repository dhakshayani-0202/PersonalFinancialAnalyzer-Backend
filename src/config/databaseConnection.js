const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Helper function to check if an environment variable exists
const checkEnvVar = (envVar) => {
  const value = process.env[envVar];
  if (!value) {
    console.error(`${envVar} is not defined. Please check your environment variables.`);
    process.exit(1);
  }
  return value;
};

// MongoDB connection function
const connectDB = async () => {
  try {
    const NODE_ENV = checkEnvVar('NODE_ENV');
    const MONGODB_URI = checkEnvVar('MONGO_URI'); // Use MONGO_URI

    const options = {
      autoIndex: false,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      serverSelectionTimeoutMS: 5000, // Fail faster if connection fails
      family: 4, // Use IPv4
    };

    console.log('Connecting to MongoDB with URI:', MONGODB_URI.replace(/:.*@/, ':****@')); // Redact password for logging

    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(MONGODB_URI, options);
    console.log('\nNode Environment:', NODE_ENV);
    console.log(`\nMongoDB Connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error('MONGODB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;