// models/construction.js
const mongoose = require('mongoose');

const constructionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Primary key
    type: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    media: [{ 
        type: { type: String, enum: ['image', 'video'], required: true },
        url: { type: String, required: true }
    }],
    // Add more fields as needed
});

const Construction = mongoose.model('Construction', constructionSchema);

module.exports = Construction;