const { Drone, Load, DroneLog } = require('../models');

module.exports = {
  register: async (details) => {
    const { serialNumber, model, weight, batteryLevel, state } = details;
    const drone = await Drone.create({
      serialNumber,
      model,
      weight,
      batteryLevel,
      state,
    });

    return drone;
  },

  getLoad: async (droneId) => {
    const drone = await Drone.find({ _id: droneId });

    if (drone.length < 1) {
      return {
        status: 'failed',
        message: 'drone does not exist',
      };
    }

    const load = await Load.find({ droneId });

    return {
      status: 'success',
      data: load,
    };
  },

  getDrones: async (state) => {
    if (state == undefined) state = null;

    const drone = await Drone.find({ state });

    if (drone.length < 1) {
      return {
        status: 'failed',
        message: `no drone in the ${state} state`,
      };
    }

    return {
      status: 'success',
      data: drone,
    };
  },

  checkBatteryLevel: async () => {
    const drones = await Drone.find({ state });

    if (drone.length < 1) return;

    await drones.map((drone) => {
      DroneLog.create({ droneId: _id, serialNumber, batteryLevel });

      if (drone.batteryLevel < 25) {
        Drone.findOneAndUpdate(
          { _id: drone._id },
          { $set: { state: 'IDLE' } },
          { new: true }
        );
      }
    });

    return;
  },
};
