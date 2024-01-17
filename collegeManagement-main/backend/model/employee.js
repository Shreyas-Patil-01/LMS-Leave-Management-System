const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  guid: { type:String },
  password: { type: String },
  staffDetails: {
    firstName: { type: String },
    middleName: { type: String},
    lastName: { type: String },
  },
  department: { type: String },
  staffType:{type : String},
  designation :{type :String},
  emailId: { type: String },
  mobile:{type:Number}
});

module.exports = mongoose.model('Employee', employeeSchema);