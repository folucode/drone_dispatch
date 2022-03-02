const { default: mongoose } = require('mongoose');
const { droneModelTypes, droneStateTypes } = require('../utils/options');
const Schema = mongoose.Schema;

const DroneSchema = new Schema(
  {
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
      type: Number,
      required: true,
    },
    batteryLevel: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: droneStateTypes,
    },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
