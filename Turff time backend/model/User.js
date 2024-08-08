
// models/User.js
const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



// Create and export the User model
module.exports = mongoose.model('User', UserSchema);
