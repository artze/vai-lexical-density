const ApplicationError = require('./ApplicationError');

class InputLengthExceededError extends ApplicationError {
    constructor(message) {
        super(message);
    }
}

module.exports = InputLengthExceededError;