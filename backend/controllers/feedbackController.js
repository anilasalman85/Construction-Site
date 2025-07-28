// controllers/feedbackController.js
const Feedback = require('../models/Feedback');

module.exports = {
  createFeedback: async (req, res) => {
    try {
      const newFeedback = await Feedback.create(req.body);
      res.status(201).json(newFeedback);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getFeedbacks: async (req, res) => {
    try {
      const feedbacks = await Feedback.find();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getFeedbackById: async (req, res) => {
    try {
      const feedback = await Feedback.findById(req.params.id);
      if (!feedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }
      res.status(200).json(feedback);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateFeedbackById: async (req, res) => {
    try {
      const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedFeedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }
      res.status(200).json(updatedFeedback);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteFeedbackById: async (req, res) => {
    try {
      const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
      if (!deletedFeedback) {
        return res.status(404).json({ message: 'Feedback not found' });
      }
      res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
