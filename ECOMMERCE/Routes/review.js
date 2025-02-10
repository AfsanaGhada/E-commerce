const express = require('express');
const mongoose = require('mongoose');
const Review = require('../Model/Reviews'); // Import Review model
const User = require('../Model/User'); // Import User model
const Product = require('../Model/Products'); // Import Product model

const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find().populate('user_id', 'name').populate('product_id', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
});

// Get reviews for a specific product
router.get('/product/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ product_id: req.params.productId }).populate('user_id', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error: error.message });
    }
});

// Get reviews by a specific user
router.get('/user/:userId', async (req, res) => {
    try {
        const reviews = await Review.find({ user_id: req.params.userId }).populate('product_id', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user reviews', error: error.message });
    }
});

// Create a review
router.post('/create', async (req, res) => {
    try {
        const { user_id, product_id, rating, comment } = req.body;

        // Validate user existence
        const user = await User.findById(user_id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Validate product existence
        const product = await Product.findById(product_id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Validate rating (must be between 1-5)
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        const review = new Review({
            user_id,
            product_id,
            rating,
            comment
        });

        await review.save();
        res.status(201).json({ message: 'Review created successfully', review });
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error: error.message });
    }
});

// Update a review
router.patch('/update/:reviewId', async (req, res) => {
    try {
        const { rating, comment } = req.body;

        // Validate rating if provided
        if (rating && (rating < 1 || rating > 5)) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        const review = await Review.findByIdAndUpdate(
            req.params.reviewId,
            { rating, comment, updated_at: Date.now() },
            { new: true }
        );

        if (!review) return res.status(404).json({ message: 'Review not found' });

        res.json({ message: 'Review updated successfully', review });
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error: error.message });
    }
});

// Delete a review
router.delete('/delete/:reviewId', async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.reviewId);
        if (review) {
            res.json({ message: 'Review deleted successfully' });
        } else {
            res.status(404).json({ message: 'Review not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error: error.message });
    }
});

module.exports = router;
