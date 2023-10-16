// Import the required dependency for the Supplier model
const Supplier = require('../models/supplier');

// Exported functions for managing suppliers

// Add a new supplier
exports.add = async (req, res) => {
    // Extract data from the request body
    const { supplierID, businessName, fullName, tele, email, address } = req.body;
    try {
        // Create a new Supplier object with extracted data
        const supplier = new Supplier({ supplierID, businessName, fullName, tele, email, address });
        // Save the new supplier to the database
        const returnSupplier = await supplier.save();
        res.status(200).json({ message: 'Supplier Added', Result: returnSupplier });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
    try {
        // Retrieve all suppliers from the database
        const suppliers = await Supplier.find();
        res.status(200).json({ message: 'Suppliers fetched', 'Result': suppliers });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get All Suppliers' });
    }
}

// Delete a specific supplier by ID
exports.deleteSupplier = async (req, res) => {
    // Extract the supplier ID from the request parameters
    const { id } = req.params;
    try {
        // Delete the supplier with the specified ID
        await Supplier.deleteOne({ _id: id });
        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (err) {
        res.status(500).json({ 'Error': err });
    }
}

// Update an existing supplier
exports.update = async (req, res) => {
    // Extract the supplier ID from the request parameters and update data from the request body
    const { id } = req.params;
    const { supplierID, businessName, fullName, tele, email, address } = req.body;
    try {
        // Create an updated supplier object
        var supplierObj = {
            "supplierID": supplierID,
            "businessName": businessName,
            "fullName": fullName,
            "tele": tele,
            "email": email,
            "address": address
        }
        // Update the supplier in the database
        await Supplier.findByIdAndUpdate(id, supplierObj);
        res.status(200).json({ 'message': 'Supplier Updated Successfully' });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot update Supplier' });
    }
}

// Get a specific supplier by ID
exports.getSupplier = async (req, res) => {
    // Extract the supplier ID from the request parameters
    const { id } = req.params;
    try {
        // Find and retrieve the supplier by its ID
        var data = await Supplier.findOne({ _id: id });
        res.send({ status: "Ok", supplier: data });
    } catch (err) {
        res.status(500).json(err);
    }
}
