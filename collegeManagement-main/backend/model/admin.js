const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  guid: { type: String },
  password: { type: String }
});

module.exports = mongoose.model('Admin', adminSchema);