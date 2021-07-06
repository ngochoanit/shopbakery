const express = require('express');
const router = express.Router()
const EmployeeController = require('../controllers/EmpolyeeController')

router.get('/list',(EmployeeController.index));

module.exports=router;
