// Import the Express library
const express = require('express');
// Create an instance of an Express router
const router = express.Router();

// Import the controller functions for handling orders
const {
    // Function to add a new order
    add,
    // Function to update an order by ID
    update,
    // Function to delete a specific order by ID
    deleteOrder,
    // Function to get all pending orders
    getAllPendingOrders,
    // Function to get all rejected orders
    getAllRejectedOrders,
    // Function to get all accepted orders
    getAllAcceptedOrders,
} = require('../controllers/order_controller');

// Define API routes and associate them with the corresponding controller functions
router.post('/add', add); // Add a new order
router.delete('/delete/:id', deleteOrder); // Delete a specific order by ID
router.put('/update/:id', update); // Update an order by ID
router.get('/getAllPendingOrders', getAllPendingOrders); // Get all pending orders
router.get('/getAllRejectedOrders', getAllRejectedOrders); // Get all rejected orders
router.get('/getAllAcceptedOrders', getAllAcceptedOrders); // Get all accepted orders

// Export the router for use in the main application
module.exports = router;
