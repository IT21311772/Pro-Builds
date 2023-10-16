// Import the Express library
const express = require('express');
// Create an instance of an Express router
const router = express.Router();

// Import the controller functions for handling suppliers
const {
    // Function to add a new supplier
    add,
    // Function to get all suppliers
    getAllSuppliers,
    // Function to delete a specific supplier by ID
    deleteSupplier,
    // Function to update a supplier by ID
    update,
    // Function to get a specific supplier by ID
    getSupplier,
} = require('../controllers/supplier_controller');

// Define API routes and associate them with the corresponding controller functions
router.post('/add', add); // Add a new supplier
router.get('/getAll', getAllSuppliers); // Get all suppliers
router.delete('/delete/:id', deleteSupplier); // Delete a specific supplier by ID
router.put('/update/:id', update); // Update a supplier by ID
router.get('/get/:id', getSupplier); // Get a specific supplier by ID

// Export the router for use in the main application
module.exports = router;
