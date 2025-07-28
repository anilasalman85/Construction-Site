// controllers/constructionController.js
const Construction = require('../models/Construction');

module.exports = {
  createConstruction: async (req, res) => {
    try {
      const newConstruction = await Construction.create(req.body);
      res.status(201).json(newConstruction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getConstructions: async (req, res) => {
    try {
      const constructions = await Construction.find();
      res.status(200).json(constructions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getConstructionById: async (req, res) => {
    try {
      const construction = await Construction.findById(req.params.id);
      if (!construction) {
        return res.status(404).json({ message: 'Construction not found' });
      }
      res.status(200).json(construction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateConstructionById: async (req, res) => {
    try {
      const updatedConstruction = await Construction.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedConstruction) {
        return res.status(404).json({ message: 'Construction not found' });
      }
      res.status(200).json(updatedConstruction);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteConstructionById: async (req, res) => {
    try {
      const deletedConstruction = await Construction.findByIdAndDelete(req.params.id);
      if (!deletedConstruction) {
        return res.status(404).json({ message: 'Construction not found' });
      }
      res.status(200).json({ message: 'Construction deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
