const { default: mongoose } = require('mongoose');
const Schema = mongoose.Schema;

const DroneLogSchema = new Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    droneId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Drone',
    },
    batteryLevel: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const DroneLog = mongoose.model('DroneLog', DroneLogSchema);
module.exports = DroneLog;
