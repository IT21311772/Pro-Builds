// Import the Express library
const express = require('express');
// Create an instance of an Express router
const router = express.Router();

// Import the controller functions for handling inquiries
const {
    // Function to add a new inquiry
    add,
    // Function to delete a specific inquiry by ID
    deleteInquiry,
    // Function to delete all inquiries
    deleteAll,
    // Function to get a specific inquiry by ID
    getInquiry,
    // Function to get all inquiries
    getAllInquiries,
} = require('../controllers/inquiry_controller');

// Define API routes and associate them with the corresponding controller functions
router.post('/add', add); // Add a new inquiry
router.delete('/deleteAll', deleteAll); // Delete all inquiries
router.delete('/delete/:id', deleteInquiry); // Delete a specific inquiry by ID
router.get('/get/:id', getInquiry); // Get a specific inquiry by ID
router.get('/getAll', getAllInquiries); // Get all inquiries

// Export the router for use in the main application
module.exports = router;
