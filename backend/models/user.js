// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Primary key
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    firstName: String,
    lastName: String,
    // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;