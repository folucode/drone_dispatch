const droneService = require('../services/droneService');
const { errorResponse, successResponse } = require('../utils/responseHandler');

module.exports = {
  registerDrone: async (req, res) => {
    try {
      const body = req.body;
      const data = await droneService.register(body);

      return successResponse(res, 201, data, 'Drone successfully created');
    } catch (error) {
      return errorResponse(res, 500, 'Something went wrong');
    }
  },
};
