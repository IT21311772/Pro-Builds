// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Create an Express app
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Define environment variables
const URI = process.env.MONGODB_URI; // MongoDB connection URI
const port = process.env.PORT || 8002; // Port for the Express server

// Connect to the MongoDB database
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB connected Successfully")).catch(err => console.log("DB not connected", err));

// Middleware setup
app.use(morgan("dev")); // Logging middleware in development mode
app.use(cors({ origin: true, credentials: true })); // Enable CORS for specified origins

// Import route modules
const authRoutes = require('./routes/auth_routes');
const itemRoute = require('./routes/item_route');
const orderRouter = require('./routes/order_routes');
const inquiryRoutes = require('./routes/inquiry_routes');
const supplierRoutes = require('./routes/supplier_routes');

// Define routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/item', itemRoute); // Item routes
app.use('/order', orderRouter); // Order routes
app.use('/inquiry', inquiryRoutes); // Inquiry routes
app.use('/supplier', supplierRoutes); // Supplier routes

// Start the server and listen on the specified port
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
