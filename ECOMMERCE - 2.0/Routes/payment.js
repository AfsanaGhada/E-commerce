const express = require('express');
const mongoose = require('mongoose');
const Payment = require('../Model/Payments'); // Import Payment model
const User = require('../Model/User'); // Import User model

const router = express.Router();

// Get all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find().populate('user_id');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payments', error: error.message });
    }
});

// Get payments by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const payments = await Payment.find({ user_id: req.params.userId });
        if (payments.length > 0) {
            res.json(payments);
        } else {
            res.status(404).json({ message: 'No payments found for this user' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payments', error: error.message });
    }
});

// Create a payment
router.post('/create', async (req, res) => {
    try {
        const { user_id, amount, status } = req.body;

        // Validate user existence
        const user = await User.findById(user_id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Validate status
        const validStatuses = ["Success", "Pending", "Failed"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid payment status' });
        }

        const payment = new Payment({
            user_id,
            amount,
            status
        });

        await payment.save();
        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error: error.message });
    }
});

// Update payment status
router.patch('/update/:paymentId', async (req, res) => {
    try {
        const { status } = req.body;

        const validStatuses = ["Success", "Pending", "Failed"];
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid payment status' });
        }

        const payment = await Payment.findByIdAndUpdate(
            req.params.paymentId,
            { status, updated_at: Date.now() },
            { new: true }
        );

        if (!payment) return res.status(404).json({ message: 'Payment not found' });

        res.json({ message: 'Payment updated successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment', error: error.message });
    }
});

// Delete a payment
router.delete('/delete/:paymentId', async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.paymentId);
        if (payment) {
            res.json({ message: 'Payment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment', error: error.message });
    }
});

module.exports = router;
