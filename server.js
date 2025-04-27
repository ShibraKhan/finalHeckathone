// Importing necessary modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Initialize dotenv to use environment variables
dotenv.config();

// Create an instance of express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Database connection (without deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Set up server to listen on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
const cors = require('cors');
app.use(cors());