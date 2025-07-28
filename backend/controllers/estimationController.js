// controllers/estimationController.js
const Estimation = require('../models/Estimation');

module.exports = {
  createEstimation: async (req, res) => {
    try {
      const newEstimation = await Estimation.create(req.body);
      res.status(201).json(newEstimation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEstimations: async (req, res) => {
    try {
      const estimations = await Estimation.find();
      res.status(200).json(estimations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getEstimationById: async (req, res) => {
    try {
      const estimation = await Estimation.findById(req.params.id);
      if (!estimation) {
        return res.status(404).json({ message: 'Estimation not found' });
      }
      res.status(200).json(estimation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateEstimationById: async (req, res) => {
    try {
      const updatedEstimation = await Estimation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedEstimation) {
        return res.status(404).json({ message: 'Estimation not found' });
      }
      res.status(200).json(updatedEstimation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteEstimationById: async (req, res) => {
    try {
      const deletedEstimation = await Estimation.findByIdAndDelete(req.params.id);
      if (!deletedEstimation) {
        return res.status(404).json({ message: 'Estimation not found' });
      }
      res.status(200).json({ message: 'Estimation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
