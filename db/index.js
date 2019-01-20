const mongoose = require('mongoose');

function init() {
    mongoose.connect('mongodb://vaitrade:vai123@ds029454.mlab.com:29454/vai-lexical-density', { useNewUrlParser: true })
        .then(function() {
            console.log('DB connection established');
        })
        .catch(function(err) {
            console.log(err);
        })
}

function disconnect() {
    mongoose.disconnect();
}

module.exports = {
    init,
    disconnect
}
