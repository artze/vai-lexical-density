// @ts-check
const basicAuth = require('basic-auth');
const dbService = require('../services/dbService');
const authService = require('../services/authService');
const InvalidInputError = require('../errors/InvalidInputError');
const UnauthorizedError = require('../errors/UnauthorizedError');

function addNonLexicalWordToDb(req, res, next) {
    // auth check
    let credentials = basicAuth(req);

    try {
        if(!credentials || !authService.checkCredentials(credentials.name, credentials.pass)) {
            throw new UnauthorizedError('Access Denied due to invalid credentials');
        }
    } catch (err) {
        next(err);
        return;
    }
    
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
