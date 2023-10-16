// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for the 'orders' collection
var orderSchema = new mongoose.Schema({
    // Single-line comment: Define the 'userID' field as a string
    userID: { type: String },
    // Single-line comment: Define the 'itemID' field as a string
    itemID: { type: String },
    // Single-line comment: Define the 'quantity' field as a number
    quantity: { type: Number },
    // Single-line comment: Define the 'totPrice' field as a number
    totPrice: { type: Number },
    // Single-line comment: Define the 'orderStatus' field as a string
    orderStatus: { type: String },
    // Single-line comment: Define the 'deliveryAddress' field as a string
    deliveryAddress: { type: String },
    // Single-line comment: Define the 'reason' field as a string
    reason: { type: String },
    // Single-line comment: Define the 'supplierName' field as a string
    supplierName: { type: String },
});

// Export the Order model based on the defined schema
module.exports = new mongoose.model('orders', orderSchema, 'orders');