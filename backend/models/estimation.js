// models/estimation.js
const mongoose = require('mongoose');

const estimationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Primary key
    type: { type: String, required: true },
    location: { type: String, required: true },
    size: Number,
    features: [String],
    estimatedCost: { type: Number, required: true },
    // Add more fields as needed
});

const Estimation = mongoose.model('Estimation', estimationSchema);

module.exports = Estimation;