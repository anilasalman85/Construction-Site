// routes/estimationRoutes.js
const express = require('express');
const router = express.Router();
const estimationController = require('../controllers/estimationController');

// Define routes for estimation operations
router.post('/', estimationController.createEstimation);
router.get('/', estimationController.getEstimations);
router.get('/:id', estimationController.getEstimationById);
router.put('/:id', estimationController.updateEstimationById);
router.delete('/:id', estimationController.deleteEstimationById);

module.exports = router;
