// Import required dependencies and modules
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Define a constant for JWT secret key
const JWT_SECRET = 'ahrgaejhhdhfvheaearbjhagerg';

// Exported functions for user registration and login

// Class-level comment: User registration and login controller functions
exports.register = async (req, res) => {
    // Extract user data from request body
    const { name, email, password } = req.body;
    // Set user type as 'user'
    userType = 'user';
    try {
        // Create a new User object with extracted data
        const userObj = new User({ name, email, password, userType });
        // Check if a user with the same email already exists
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.send({ error: "User exists" });
        }
        // Save the new user to the database
        const user = await userObj.save();
        res.status(200).json({ message: 'User registered successfully', Result: user });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Method-level comment: Admin registration controller function
exports.adminRegister = async (req, res) => {
    // Extract user data from request body
    const { name, email, password } = req.body;
    // Set user type as 'admin'
    userType = 'admin';
    try {
        // Create a new User object with extracted data
        const userObj = new User({ name, email, password, userType });
        // Check if a user with the same email already exists
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.send({ error: "User exists" });
        }
        // Save the new admin user to the database
        const user = await userObj.save();
        res.status(200).json({ message: 'Admin user registered successfully', Result: user });
    } catch (err) {
        res.json({ status: "error", error: err });
    }
}

// Method-level comment: User login controller function
exports.login = async (req, res) => {
    // Extract user data from request body
    const { email, password } = req.body;
    try {
        // Find the user with the provided email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'User Not Found' });
        }
        if (password == user.password) {
            // Generate a JWT token for the user
            const token = jwt.sign({ email: user.email }, JWT_SECRET);
            if (res.status(201)) {
                return res.json({
                    status: 'OK',
                    token: token,
                });
            } else {
                return res.json({ error: "error" });
            }
        }
        res.json({ status: "error", error: "Invalid Password" });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Method-level comment: Get user data using a JWT token
exports.getUserData = async (req, res) => {
    // Extract the JWT token from the request body
    const { token } = req.body;
    try {
        // Verify the JWT token and get the user's email
        const user = jwt.verify(token, JWT_SECRET);
        const userEmail = user.email;
        // Find the user by email and send the data as response
        await User.findOne({ email: userEmail }).then((data) => {
            res.send({ status: "OK", data: data });
        }).catch((error) => {
            res.send({ status: "error", data: error });
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Method-level comment: Get user data using an email
exports.getUserDataFromEmail = async (req, res) => {
    // Extract the email from the request body
    const { email } = req.body;
    try {
        // Find the user by email and send the data as response
        await User.findOne({ email: email }).then((data) => {
            res.send({ status: "OK", data: data });
        }).catch((error) => {
            res.send({ status: "error", data: error });
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Method-level comment: Delete all user records
exports.deleteAllUsers = async (req, res) => {
    try {
        // Delete all user records in the database
        await User.deleteMany();
        res.status(200).json({ "message": "All Users Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
}
