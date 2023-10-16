// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the 'users' collection
var userSchema = new mongoose.Schema({
    // Single-line comment: Define the 'name' field as a string
    name: { type: String },
    // Single-line comment: Define the 'email' field as a string, and mark it as unique
    email: { type: String, unique: true },
    // Single-line comment: Define the 'password' field as a string
    password: { type: String },
    // Single-line comment: Define the 'userType' field as a string
    userType: { type: String },
});

// Export the User model based on the defined schema
module.exports = new mongoose.model('users', userSchema, 'users');