const express = require('express');
const { getAllEmployees, getEmployeeByEmpno } = require('../controllers/empController');
const router = express.Router();

router.get('/', getAllEmployees);
router.get('/:emp_no', getEmployeeByEmpno);

module.exports = router;
