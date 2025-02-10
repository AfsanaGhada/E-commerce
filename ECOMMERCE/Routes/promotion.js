const express = require('express');
const mongoose = require('mongoose');
const Promotion = require('../Model/Promotions'); // Import Promotion model

const router = express.Router();

// Get all promotions
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching promotions', error: error.message });
    }
});

// Get a promotion by code
router.get('/:code', async (req, res) => {
    try {
        const promotion = await Promotion.findOne({ code: req.params.code.toUpperCase() });
        if (!promotion) {
            return res.status(404).json({ message: 'Promotion not found' });
        }
        res.json(promotion);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching promotion', error: error.message });
    }
});

// Create a new promotion
router.post('/create', async (req, res) => {
    try {
        const { code, discount_percentage, description } = req.body;

        // Validate discount percentage
        if (discount_percentage < 1 || discount_percentage > 100) {
            return res.status(400).json({ message: 'Discount percentage must be between 1 and 100' });
        }

        // Check if the promotion code already exists
        const existingPromotion = await Promotion.findOne({ code: code.toUpperCase() });
        if (existingPromotion) {
            return res.status(400).json({ message: 'Promotion code already exists' });
        }

        const promotion = new Promotion({
            code: code.toUpperCase(), // Store codes in uppercase for consistency
            discount_percentage,
            description
        });

        await promotion.save();
        res.status(201).json({ message: 'Promotion created successfully', promotion });
    } catch (error) {
        res.status(500).json({ message: 'Error creating promotion', error: error.message });
    }
});

// Update a promotion
router.patch('/update/:promotionId', async (req, res) => {
    try {
        const { discount_percentage, description } = req.body;

        // Validate discount percentage if provided
        if (discount_percentage && (discount_percentage < 1 || discount_percentage > 100)) {
            return res.status(400).json({ message: 'Discount percentage must be between 1 and 100' });
        }

        const promotion = await Promotion.findByIdAndUpdate(
            req.params.promotionId,
            { discount_percentage, description },
            { new: true }
        );

        if (!promotion) return res.status(404).json({ message: 'Promotion not found' });

        res.json({ message: 'Promotion updated successfully', promotion });
    } catch (error) {
        res.status(500).json({ message: 'Error updating promotion', error: error.message });
    }
});

// Delete a promotion
router.delete('/delete/:promotionId', async (req, res) => {
    try {
        const promotion = await Promotion.findByIdAndDelete(req.params.promotionId);
        if (promotion) {
            res.json({ message: 'Promotion deleted successfully' });
        } else {
            res.status(404).json({ message: 'Promotion not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting promotion', error: error.message });
    }
});

module.exports = router;
