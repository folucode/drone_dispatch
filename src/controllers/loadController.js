const loadService = require('../services/loadService');
const { errorResponse, successResponse } = require('../utils/responseHandler');

module.exports = {
  addLoad: async (req, res) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const { message, status, data } = await loadService.add(body, id);
      if (status == false) return errorResponse(res, 400, message);

      return successResponse(res, 201, data, 'Load successfully added');
    } catch (error) {
      return errorResponse(res, 500, 'Something went wrong');
    }
  },
};
