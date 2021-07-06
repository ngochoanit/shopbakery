const express = require('express');
const router = express.Router()
const RoleController = require('../controllers/RoleController')

router.get('/list', RoleController.index);
router.get('/', RoleController.index);

module.exports = router