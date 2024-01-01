// Define a Mongoose schema and model (replace with your own schema/model)
const sampleSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

const SampleModel = mongoose.model('Sample', sampleSchema);