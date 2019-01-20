const router = require('express').Router();
const nonLexicalWordsController = require('../controllers/nonLexicalWords');

router.post('/', nonLexicalWordsController.addNonLexicalWordToDb);

module.exports = router;
