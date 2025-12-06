class ExpressError extends Error {
  //error is default error class
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
module.exports = ExpressError;
