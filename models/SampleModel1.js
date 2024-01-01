const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const SampleModel = mongoose.model('Samples', sampleSchema);

module.exports = SampleModel;
