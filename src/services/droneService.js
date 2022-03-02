const { Drone } = require('../models');

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

    return {
      status: true,
      drone,
    };
  },
};
