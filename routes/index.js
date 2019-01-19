const textComplexityRoutes = require('./textComplexityRoutes');
const applicationController = require('../controllers/application');
const errorHandler = require('../middleware/errorHandler');

function init(app) {

    app.use('/complexity', textComplexityRoutes);
    
    app.all('*', applicationController.handleResourceNotFound);

    app.use(errorHandler);

}

module.exports = {
    init
}
