const express = require('express');
const mongoose = require('mongoose');
const Order = require('../Model/Orders');  // Import Order model
const User = require('../Model/User');    // Import User model
const Product = require('../Model/Products');  // Import Product model

const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('user_id').populate('items.product_id');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
});

// Get orders by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ user_id: req.params.userId }).populate('items.product_id');
        if (orders.length > 0) {
            res.json(orders);
        } else {
            res.status(404).json({ message: 'No orders found for this user' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
});

// Create an order
router.post('/create', async (req, res) => {
    try {
        const { user_id, items, shipping_address, payment_status } = req.body;

        // Check if user exists
        const user = await User.findById(user_id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        let total = 0;

        // Validate and fetch product details
        const populatedItems = await Promise.all(
            items.map(async (item) => {
                const product = await Product.findById(item.product_id);
                if (!product) throw new Error(`Product with ID ${item.product_id} not found`);

                const price = product.price * item.quantity;
                total += price;

                return { product_id: product._id, quantity: item.quantity, price };
            })
        );

        // Create order
        const order = new Order({
            user_id,
            items: populatedItems,
            total,
            status: 'Pending',
            shipping_address,
            payment_status
        });

        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
});

// Update order status
router.patch('/update/:orderId', async (req, res) => {
    try {
        const { status, payment_status } = req.body;

        const validStatuses = ["Pending", "Shipped", "Delivered", "Cancelled"];
        const validPaymentStatuses = ["Paid", "Pending", "Failed"];

        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid order status' });
        }

        if (payment_status && !validPaymentStatuses.includes(payment_status)) {
            return res.status(400).json({ message: 'Invalid payment status' });
        }

        const order = await Order.findByIdAndUpdate(
            req.params.orderId,
            { status, payment_status, updated_at: Date.now() },
            { new: true }
        );

        if (!order) return res.status(404).json({ message: 'Order not found' });

        res.json({ message: 'Order updated successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error: error.message });
    }
});

// Delete an order
router.delete('/delete/:orderId', async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);
        if (order) {
            res.json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
});

module.exports = router;
