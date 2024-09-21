// models/Project.js

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String], // Array of image URLs or paths
        default: []
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
