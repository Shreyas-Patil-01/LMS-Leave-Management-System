const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  guid: { type: String, unique: true },
  staffDetails: {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
  },
  password: { type: String },
  emailId: { type: String },
  category: { type: String, enum: ['staff', 'principal', 'hod', 'admin'] },
  isOnLeave: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  departmentId: { type: String },
});

module.exports = mongoose.model('Employee', employeeSchema);