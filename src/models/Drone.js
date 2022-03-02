const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  serialNumber: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
    enum: ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'],
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
    enum: ['IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING'],
  },
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
