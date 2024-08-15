const { Department, User } = require('../models/db.model');

// Create a new Department
exports.createDepartment = (req, res) => {
    if (!req.body.dname) {
        return res.status(400).send({
            message: "dname is required"
        });
    }

    const department = new Department({
        dname: req.body.dname
    });

    department.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Something went wrong while creating the department."
        }));
};

// Create a new User
exports.createUser = (req, res) => {
    if (!req.body.username || !req.body.deptid) {
        return res.status(400).send({
            message: "username and deptid are required"
        });
    }

    const user = new User({
        username: req.body.username,
        deptid: req.body.deptid
    });

    user.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Something went wrong while creating the user."
        }));
};

// Retrieve all Users with Departments
exports.getUsersWithDepartments = (req, res) => {
    User.aggregate([
        {
            $lookup: {
                from: 'Department',
                localField: 'deptid',
                foreignField: '_id',
                as: 'departmentDetails'
            }
        }
    ])
    .then(users => res.send(users))
    .catch(err => res.status(500).send({
        message: err.message || "Something went wrong while retrieving users."
    }));
};
