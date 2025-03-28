const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  name: String,
  type: String,
  health: String,
  lastChecked: Date,
});

const Crop = mongoose.model('Crop', cropSchema);
module.exports = Crop;
