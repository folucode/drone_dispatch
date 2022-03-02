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

  getLoad: async (req, res) => {
    try {
      const { id } = req.params;
      const { message, status, data } = await droneService.getLoad(id);
      if (status == 'failed') return errorResponse(res, 400, message);

      return successResponse(res, 200, data, 'Load successfully fetched');
    } catch (error) {
      return errorResponse(res, 500, 'Something went wrong');
    }
  },

  getDrones: async (req, res) => {
    try {
      const { state } = req.query;

      const { message, status, data } = await droneService.getDrones(state);
      if (status == 'failed') return errorResponse(res, 400, message);

      return successResponse(
        res,
        200,
        data,
        'Available drones successfully fetched'
      );
    } catch (error) {
      return errorResponse(res, 500, 'Something went wrong');
    }
  },
};
