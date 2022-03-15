const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  quote: { type: String, required: true },
  userId: { type: String, required: true },
  rate: { type: String },
});


module.exports = mongoose.model('Note', noteSchema);