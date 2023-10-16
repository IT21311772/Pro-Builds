// Import the required dependency for the Order model
const Order = require('../models/order');

// Exported functions for managing orders

// Add a new order
exports.add = async (req, res) => {
    // Extract data from the request body
    const { quantity, userID, itemID, totPrice, deliveryAddress, supplierName } = req.body;
    var orderStatus;
    try {
        // Determine the order status based on total price
        if (totPrice > 100000) {
            orderStatus = 'Pending';
        } else {
            orderStatus = 'Accepted';
        }
        // Create a new Order object with extracted data and calculated order status
        const order = new Order({ userID, itemID, quantity, totPrice, orderStatus, deliveryAddress, supplierName });
        // Save the new order to the database
        const returnOrder = await order.save();
        res.status(200).json({ message: 'Order Added', Result: returnOrder });
    } catch (err) {
        res.status(500).json(err);
    }
}

// Update an existing order
exports.update = async (req, res) => {
    // Extract the order ID from the request parameters and update data from the request body
    const { id } = req.params;
    const { orderStatus, reason } = req.body;
    try {
        // Find the order to update
        const orderToUpdate = await Order.findById(id);
        // Create an updated order object
        var orderObj = {
            "userID": orderToUpdate.userID,
            "itemID": orderToUpdate.itemID,
            "quantity": orderToUpdate.quantity,
            "totPrice": orderToUpdate.totPrice,
            "orderStatus": orderStatus,
            "deliveryAddress": orderToUpdate.deliveryAddress,
            "reason": reason
        }
        // Update the order in the database
        await Order.findByIdAndUpdate(id, orderObj);
        res.status(200).json({ 'message': 'Order Updated Successfully' });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot update Order' });
    }
}

// Delete a specific order by ID
exports.deleteOrder = async (req, res) => {
    // Extract the order ID from the request parameters
    const { id } = req.params;
    try {
        // Delete the order with the specified ID
        await Order.deleteOne({ _id: id });
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ 'Error': err });
    }
}

// Get all pending orders
exports.getAllPendingOrders = async (req, res) => {
    var pendingOrders = [];
    try {
        // Retrieve all orders from the database
        const orders = await Order.find();
        // Filter and collect pending orders
        for (var order of orders) {
            if (order.orderStatus === 'Pending') {
                pendingOrders.push(order);
            }
        }
        res.status(200).json({ 'Result': pendingOrders });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get All Pending Order details' });
    }
}

// Get all rejected orders
exports.getAllRejectedOrders = async (req, res) => {
    var rejectedOrders = [];
    try {
        // Retrieve all orders from the database
        const orders = await Order.find();
        // Filter and collect rejected orders
        for (var order of orders) {
            if (order.orderStatus === 'Rejected') {
                rejectedOrders.push(order);
            }
        }
        res.status(200).json({ 'Result': rejectedOrders });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get All Rejected Order details' });
    }
}

// Get all accepted orders
exports.getAllAcceptedOrders = async (req, res) => {
    var acceptedOrders = [];
    try {
        // Retrieve all orders from the database
        const orders = await Order.find();
        // Filter and collect accepted orders
        for (var order of orders) {
            if (order.orderStatus === 'Accepted') {
                acceptedOrders.push(order);
            }
        }
        res.status(200).json({ 'Result': acceptedOrders });
    } catch (err) {
        res.status(500).json({ 'Error': 'Cannot get All Accepted Order details' });
    }
}
