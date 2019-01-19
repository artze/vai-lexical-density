const router = require('express').Router();
const textComplexityController = require('../controllers/textComplexity');

router.post('/', textComplexityController.computeTextComplexity)

module.exports = router;
