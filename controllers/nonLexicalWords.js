// @ts-check
const dbService = require('../services/dbService');

function addNonLexicalWordToDb(req, res, next) {
    // auth check
    // request body check

    // Handle valid request
    // Add new non-lexical word to db
    const newWord = req.body.wordInput;
    dbService.addNonLexicalWord(newWord)
        .then(function(entryObj) {
            console.log(`${entryObj.word} -- added to database`);
            res.status(201).json(entryObj);
        })
        .catch(function(err) {
            next(err);
            return;
        })
}

module.exports = {
    addNonLexicalWordToDb
}
