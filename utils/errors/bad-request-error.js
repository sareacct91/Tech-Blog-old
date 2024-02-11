const CustomError = require("./custome-error");

class BadRequestError extends CustomError {
  constructor(msg) {
    super(msg);
    this.statusCode = 400;
  }
};

module.exports = BadRequestError;