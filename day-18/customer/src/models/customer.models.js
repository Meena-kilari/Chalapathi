const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    cid: { type: Number, required: true },
    caadhar: { type: Number, required: true },
    cpan: { type: String, required: true },
    cdob: { type: Date, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', UserSchema);
