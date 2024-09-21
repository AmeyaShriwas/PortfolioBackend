const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  ExperienceDetail: {
    type: [{
      timeline: { type: String, required: true },  // timeline field as a string
      position: { type: String, required: true },  // position field as a string
      content: { type: String, required: true }    // content field as a string
    }],
    required: true  // The array itself is required
  }
});

module.exports = mongoose.model('Experience', experienceSchema);
