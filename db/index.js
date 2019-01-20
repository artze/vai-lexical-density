const mongoose = require('mongoose');
const storedCredentials = require('../config/credentials');

function init() {
    mongoose.connect(`mongodb://${storedCredentials.DB_USERNAME}:${storedCredentials.DB_PASSWORD}@ds029454.mlab.com:29454/vai-lexical-density`, { useNewUrlParser: true })
        .then(function() {
            console.log('DB connection established');
        })
        .catch(function(err) {
            console.log(err);
        })
}

function disconnect() {
    mongoose.disconnect();
    console.log('DB connection closed');
}

module.exports = {
    init,
    disconnect
}
