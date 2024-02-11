function errorHandler(err, req, res, next) {

  const customError = {
    message: err.message || 'Something went wrong. Try again later.',
    statusCode: err.statusCode || 500
  };



  res.status(customError.statusCode).json({ message: customError.message });
};


module.exports = errorHandler;