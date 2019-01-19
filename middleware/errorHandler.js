function errorHandler(err, req, res, next) {
    console.log(err);
    switch (err.name) {
        case 'InvalidInputError':
        res.status(400).end(err.message);
        break;

        case 'InputLengthExceededError':
        res.status(400).end(err.message);
        break;

        default:
        res.status(500).end();
        break;
    }
  }
  
module.exports = errorHandler;
