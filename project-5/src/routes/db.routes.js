const express = require('express');
const router = express.Router();
const dbController = require('../controllers/table.controllers');

// Create a new Department
router.post('/departments', dbController.createDepartment);

// Create a new User
router.post('/users', dbController.createUser);

// Retrieve all Users with Departments
router.get('/users', dbController.getUsersWithDepartments);

module.exports = router;
