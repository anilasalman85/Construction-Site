// routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Define routes for feedback operations
router.post('/', feedbackController.createFeedback);
router.get('/', feedbackController.getFeedbacks);
router.get('/:id', feedbackController.getFeedbackById);
router.put('/:id', feedbackController.updateFeedbackById);
router.delete('/:id', feedbackController.deleteFeedbackById);

module.exports = router;
