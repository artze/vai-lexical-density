const textComplexityRoutes = require('./textComplexityRoutes');

function init(app) {
    app.use('/complexity', textComplexityRoutes)
}

module.exports = {
    init
}