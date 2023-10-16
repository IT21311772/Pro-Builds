// Import the Express library
const express = require('express');
// Create an instance of an Express router
const router = express.Router();

// Import the controller functions for handling items
const {
    // Function to add a new item
    add,
    // Function to delete a specific item by ID
    deleteItem,
    // Function to delete all items
    deleteAllItems,
    // Function to get a specific item by ID
    getItem,
    // Function to get all items
    getAllItems,
} = require('../controllers/item_controller');

// Define API routes and associate them with the corresponding controller functions
router.post('/add', add); // Add a new item
router.delete('/deleteAll', deleteAllItems); // Delete all items
router.delete('/delete/:id', deleteItem); // Delete a specific item by ID
router.get('/get/:id', getItem); // Get a specific item by ID
router.get('/getAll', getAllItems); // Get all items

// Export the router for use in the main application
module.exports = router;
