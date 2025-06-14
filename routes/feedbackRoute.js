const express = require('express');
const Feedback = require('../models/feedbackModel.js');

const router = express.Router();

// POST /api/feedback - Create new feedback
router.post('/', async (req, res) => {
  try {
    const { name, contact, feedMessage, rating } = req.body;

    // Validate required fields
    if (!name || !contact || !feedMessage || rating == null) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5.' });
    }

    const feedback = new Feedback({
      name,
      contact,
      feedMessage,
      rating,
    });

    const savedFeedback = await feedback.save();
    res.status(201).json({ 
      success: true, 
      message: 'Thank you for your feedback!',
      data: savedFeedback 
    });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while processing your feedback' 
    });
  }
});

// GET /api/feedback - Retrieve all feedback
router.get('/', async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({ 
      success: true, 
      data: feedbackList,
      message: 'Feedback retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching feedback' 
    });
  }
});

module.exports = router;