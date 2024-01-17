const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const princiSchema = new Schema({
  guid: { type: String },
 
  password: { type: String }
});

module.exports = mongoose.model('Princi', princiSchema);