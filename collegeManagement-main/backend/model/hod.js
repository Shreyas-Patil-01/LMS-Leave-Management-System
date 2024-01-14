const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hodSchema = new Schema({
  guid: { type: String, unique: true },
  password: { type: String },
  department :{type:String}
});

module.exports = mongoose.model('Hod', hodSchema);