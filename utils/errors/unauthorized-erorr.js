const CustomError = require("./custome-error");

class UnauthorizedError extends CustomError {
  constructor(msg) {
    super(msg);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;