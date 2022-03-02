module.exports = {
  successResponse: (res, statusCode, data, message) => {
    return res.status(statusCode).json({
      status: 'success',
      message,
      data,
    });
  },

  errorResponse: (res, statusCode, message, data = undefined) => {
    return res.status(statusCode).json({
      status: 'failed',
      message,
      data,
    });
  },

  customError: (
    code = 500,
    message = 'Something went wrong processing your request!'
  ) => {
    const error = new Error(message);
    error.customError = { code, message };
    return error;
  },
};
