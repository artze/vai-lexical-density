const textComplexityRoutes = require('./textComplexityRoutes');
const errorHandler = require('../middleware/errorHandler');

function init(app) {

    app.use('/complexity', textComplexityRoutes);
    
    app.use(errorHandler);

}

module.exports = {
    init
}