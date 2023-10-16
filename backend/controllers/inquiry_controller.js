// Import the required dependency for Inquiry model
const Inquiry = require('../models/inquiry');

// Exported functions for managing inquiries

// Add a new inquiry
exports.add = async (req, res) => {
    // Extract data from the request body
    const { orderID, title, message } = req.body;
    try {
        // Create a new Inquiry object with extracted data
        const inquiryObj = new Inquiry({ orderID, title, message });
        // Save the new inquiry to the database
        const returnInquiry = await inquiryObj.save();
        res.status(200).json({ message: 'Inquiry Added', Result: returnInquiry });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete all inquiries
exports.deleteAll = async (req, res) => {
    try {
        // Delete all inquiry records in the database
        await Inquiry.deleteMany();
        res.status(200).json({ message: "All Inquiries Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete a specific inquiry by ID
exports.deleteInquiry = async (req, res) => {
    // Extract the inquiry ID from the request parameters
    const { id } = req.params;
    try {
        // Delete the inquiry with the specified ID
        await Inquiry.deleteOne({ _id: id });
        res.status(200).json({ 'message': 'Inquiry deleted successfully' });
    } catch (err) {
        res.status(500).json({ Error: err });
    }
}

// Get a specific inquiry by ID
exports.getInquiry = async (req, res) => {
    // Extract the inquiry ID from the request parameters
    const { id } = req.params;
    try {
        // Find and retrieve the inquiry by its ID
        const inquiry = await Inquiry.findById(id);
        res.status(200).json({ message: 'Inquiry Received Successfully', 'Result': inquiry });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get Inquiry details' });
    }
}

// Get all inquiries
exports.getAllInquiries = async (req, res) => {
    try {
        // Retrieve all inquiries from the database
        const inquiries = await Inquiry.find();
        res.status(200).json({ message: 'Inquiries fetched successfully', Result: inquiries });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get All Inquiries details' });
    }
}
