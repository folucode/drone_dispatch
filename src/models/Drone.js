const { default: mongoose } = require('mongoose');
const { droneModelTypes, droneStateTypes } = require('../utils/options');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  serialNumber: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
    enum: droneModelTypes,
  },
  weight: {
    type: String,
    required: true,
  },
  batteryCapacity: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
    enum: droneStateTypes,
  },
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
