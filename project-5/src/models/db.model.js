const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    dname: { type: String, required: true }
}, {
    timestamps: true
});

const UserSchema = new Schema({
    username: { type: String, required: true },
    deptid: { type: Schema.Types.ObjectId, ref: 'Department', required: true }
}, {
    timestamps: true
});

const Department = mongoose.model('Department', DepartmentSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Department,
    User
};
