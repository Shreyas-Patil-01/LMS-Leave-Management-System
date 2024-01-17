const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  guid: { type: String, unique: true },
  password: { type: String,required:true }
});

module.exports = mongoose.model('Admin', adminSchema);