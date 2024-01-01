const express = require('express');
const mongoose = require('mongoose');

const mono_db = process.env.DATABASE_URL

// Set up Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up Mongoose connection
mongoose.connect('mono_db', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Define a simple GET endpoint
app.get('/', async (req, res) => {
  try {
    // Create a sample document (replace with your own logic)
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
