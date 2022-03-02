const { validationResult } = require('express-validator');
const { errorResponse } = require('../utils/responseHandler');

const validatorHandler = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorInfo = errors.array({ onlyFirstError: true });
      const errorMessage = errorInfo[0].msg;

      return errorResponse(res, 400, errorMessage);
    }

    next();
  } catch (error) {
    return errorResponse(res, 500, 'Something went wrong');
  }
};

module.exports = validatorHandler;
