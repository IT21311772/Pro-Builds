// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the 'items' collection
var itemSchema = new mongoose.Schema({
    // Single-line comment: Define the 'name' field as a string
    name: { type: String },
    // Single-line comment: Define the 'unitPrice' field as a number
    unitPrice: { type: Number },
    // Single-line comment: Define the 'unitType' field as a string
    unitType: { type: String },
});

// Export the Item model based on the defined schema
module.exports = new mongoose.model('items', itemSchema, 'items');