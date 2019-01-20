const ApplicationError = require('./ApplicationError');

class UnauthorizedError extends ApplicationError {
    constructor(message) {
        super(message);
    }
}

module.exports = UnauthorizedError;
