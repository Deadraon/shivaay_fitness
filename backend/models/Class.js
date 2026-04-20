const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
  instructorName: { type: String }, // For ease of use if we don't populate
  schedule: { type: String, required: true },
  capacity: { type: Number, default: 20 },
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
