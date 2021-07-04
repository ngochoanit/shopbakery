const express = require('express');
const router = express.Router()
const PositionController = require('../controllers/PositionController')

router.use('/list', PositionController.index);
router.use('/', PositionController.index);

module.exports = router