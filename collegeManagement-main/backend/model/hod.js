const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hodSchema = new Schema({
 guid: { type:String },
  password: { type: String },
  hodDetails: {
    firstName: { type: String },
    middleName: { type: String},
    lastName: { type: String },
  },
  department: { type: String },
  emailId: { type: String },
  mobile:{type:Number}
});
module.exports = mongoose.model('Hod', hodSchema);