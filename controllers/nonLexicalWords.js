// @ts-check
const dbService = require('../services/dbService');
const InvalidInputError = require('../errors/InvalidInputError');

function addNonLexicalWordToDb(req, res, next) {
    // auth check
    
    const newWord = req.body.wordInput;
    // Validate empty request body
    try {
        if (!newWord) {
            throw new InvalidInputError('Word input cannot be empty');
        }
    } catch(err) {
        next(err);
        return;
    }

    // Handle valid request
    // Add new non-lexical word to db
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
