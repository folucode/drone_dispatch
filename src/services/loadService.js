const { Load, Drone } = require('../models');

module.exports = {
  add: async (details, droneId) => {
    const { name, weight, code, image } = details;

    const drone = await Drone.find({ _id: droneId });

    if (drone.length < 1) {
      return {
        status: false,
        message: 'drone does not exist',
      };
    }

    if (weight > drone[0].weight) {
      return {
        status: false,
        message: 'load is too much for the drone to carry',
      };
    }

    const load = await Load.create({
      name,
      code,
      weight,
      image,
      droneId,
    });

    await Drone.findOneAndUpdate({ _id: droneId, state: 'LOADED' });

    return {
      status: 'success',
      data: load,
    };
  },
};
