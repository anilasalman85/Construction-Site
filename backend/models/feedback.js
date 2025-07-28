// models/feedback.js
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Primary key
    username: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Foreign key referencing User model
    feedback: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    // Add more fields as needed
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;