// routes/constructionRoutes.js
const express = require('express');
const router = express.Router();
const constructionController = require('../controllers/constructionController');

// Define routes for construction operations
router.post('/', constructionController.createConstruction);
router.get('/', constructionController.getConstructions);
router.get('/:id', constructionController.getConstructionById);
router.put('/:id', constructionController.updateConstructionById);
router.delete('/:id', constructionController.deleteConstructionById);

module.exports = router;
