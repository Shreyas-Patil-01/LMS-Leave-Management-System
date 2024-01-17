const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const princiSchema = new Schema({
  guid: { type: String, unique: true },
 
  password: { type: String,required:true }
});

module.exports = mongoose.model('Princi', princiSchema);