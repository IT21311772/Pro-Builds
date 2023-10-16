// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the 'suppliers' collection
var supplierSchema = new mongoose.Schema({
    // Single-line comment: Define the 'supplierID' field as a string
    supplierID: { type: String },
    // Single-line comment: Define the 'businessName' field as a string
    businessName: { type: String },
    // Single-line comment: Define the 'fullName' field as a string
    fullName: { type: String },
    // Single-line comment: Define the 'tele' field as a number
    tele: { type: Number },
    // Single-line comment: Define the 'email' field as a string
    email: { type: String },
    // Single-line comment: Define the 'address' field as a string
    address: { type: String },
});

// Export the Supplier model based on the defined schema
module.exports = new mongoose.model('suppliers', supplierSchema, 'suppliers');