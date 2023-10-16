// Import the required dependency for Item model
const Item = require('../models/item');

// Exported functions for managing items

// Add a new item
exports.add = async (req, res) => {
    // Extract data from the request body
    const { name, unitPrice, unitType } = req.body;
    try {
        // Create a new Item object with extracted data
        const item = new Item({ name, unitPrice, unitType });
        // Check if an item with the same name already exists
        const oldItem = await Item.findOne({ name });
        if (oldItem) {
            return res.send({ error: 'Item Already Exists' });
        }
        // Save the new item to the database
        const returnItem = await item.save();
        res.status(200).json(returnItem);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete all items
exports.deleteAllItems = async (req, res) => {
    try {
        // Delete all item records in the database
        await Item.deleteMany();
        res.status(200).json({ "message": "All Items Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete a specific item by ID
exports.deleteItem = async (req, res) => {
    // Extract the item ID from the request parameters
    const { id } = req.params;
    try {
        // Delete the item with the specified ID
        await Item.deleteOne({ _id: id });
        res.status(200).json({ 'message': 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ 'Error': err });
    }
}

// Get a specific item by ID
exports.getItem = async (req, res) => {
    // Extract the item ID from the request parameters
    const { id } = req.params;
    try {
        // Find and retrieve the item by its ID
        const item = await Item.findById(id);
        res.status(200).json({ 'message': 'Item Received Successfully', 'Result': item });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get Item details' });
    }
}

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        // Retrieve all items from the database
        const items = await Item.find();
        res.status(200).json({ 'Result': items });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get All Items details' });
    }
}
