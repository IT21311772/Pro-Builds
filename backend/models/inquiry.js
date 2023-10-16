// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the 'inquiries' collection
var inquirySchema = new mongoose.Schema({
    // Define the 'orderID' field as a string
    orderID: { type: String },
    // Define the 'title' field as a string
    title: { type: String },
    // Define the 'message' field as a string
    message: { type: String },
});

// Export the Inquiry model based on the defined schema
module.exports = new mongoose.model('inquiries', inquirySchema, 'inquiries');