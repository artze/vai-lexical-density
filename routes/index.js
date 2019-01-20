const textComplexityRoutes = require('./textComplexityRoutes');
const nonLexicalWordsRoutes = require('./nonLexicalWordsRoutes');
const applicationController = require('../controllers/application');
const errorHandler = require('../middleware/errorHandler');

function init(app) {

    app.use('/complexity', textComplexityRoutes);
    
    app.use('/non-lexical-words', nonLexicalWordsRoutes);
    
    app.all('*', applicationController.handleResourceNotFound);

    app.use(errorHandler);

}

module.exports = {
    init
}
