const express = require('express');
const router = express.Router();
const { addDepartment, addUser, getUsersWithDepartments } = require('../controllers/table.controllers');

router.post('/add-department', addDepartment);
router.post('/add-user', addUser);
router.get('/users-with-departments', getUsersWithDepartments);

module.exports = router;
