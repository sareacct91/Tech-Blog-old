const CustomError = require("./custome-error");

class NotFoundError extends CustomError {
  constructor(msg) {
    super(msg);
    this.StatusCode = 404;
  }
};

module.exports = NotFoundError