// Import the Express library
const express = require('express');
// Create an instance of an Express router
const router = express.Router();

// Import the controller functions for handling authentication
const {
    // Function to handle user registration
    register,
    // Function to handle admin registration
    adminRegister,
    // Function to handle user login
    login,
    // Function to delete all user data
    deleteAllUsers,
    // Function to get user data
    getUserData,
    // Function to get user data based on email
    getUserDataFromEmail,
} = require('../controllers/auth_controller');

// Define API routes and associate them with the corresponding controller functions
router.post('/register', register); // Register a new user
router.post('/adminRegister', adminRegister); // Register a new admin
router.post('/login', login); // User login
router.delete('/deleteAllUsers', deleteAllUsers); // Delete all user data
router.post('/getData', getUserData); // Get user data
router.post('/getDataFromEmail', getUserDataFromEmail); // Get user data based on email

// Export the router for use in the main application
module.exports = router;
