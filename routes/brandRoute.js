const express = require('express');
const router = express.Router();
const Brand = require('../models/brandModel');

// ✅ GET: Fetch brand details 
router.get('/', async (req, res) => {
    try {
        const brand = await Brand.findOne();
        if (!brand) {
            return res.status(404).json({
                success: false,
                message: 'Brand not found'
            });
        }
        res.status(200).json({
            success: true, 
            brand
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ✅ PUT: Update brand details
router.put('/update', async (req, res) => {
    try {
        const brand = await Brand.findOne();
        if (!brand) {
            return res.status(404).json({
                success: false,
                message: 'Brand not found'
            });
        }

        // ✅ Update all top-level and nested fields
        const allowedNestedFields = ['contact_info', 'social_media', 'about'];

        for (const key in req.body) {
            if (allowedNestedFields.includes(key)) {
                brand[key] = {
                    ...brand[key],
                    ...req.body[key],
                };
            } else {
                brand[key] = req.body[key];
            }
        }

        await brand.save();

        res.status(200).json({
            success: true,
            message: '✅ Brand updated successfully',
            brand
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
