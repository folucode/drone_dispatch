const { Drone, Load } = require('../models');

module.exports = {
  register: async (details) => {
    const { serialNumber, model, weight, batteryCapacity, state } = details;
    const drone = await Drone.create({
      serialNumber,
      model,
      weight,
      batteryCapacity,
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
};
