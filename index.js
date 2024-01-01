const express = require('express');
const mongoose = require('mongoose');
const SampleModel = require('./models/SampleModel1');
require('dotenv').config();
const database = process.env.DATABASE_URL;

if (!database) {
  console.error('DATABASE_URL is not defined in environment variables.');
  process.exit(1); // Exit the application if DATABASE_URL is not defined
}

// Set up Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up Mongoose connection
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a simple GET endpoint
app.get('/', async (req, res) => {
  try {
    // Create a sample document
    const sampleData = new SampleModel({
      name: 'John Doe',
      age: 25,
    });

    // Save to the database
    await sampleData.save();

    // Send a response
    res.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
