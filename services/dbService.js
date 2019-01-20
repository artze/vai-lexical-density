// @ts-check

const NonLexicalWord = require('../db/models/NonLexicalWord')

/**
 * Get all non-lexical words from database and return array of non-lexical words
 * @returns {Promise}
 */
function getAllNonLexicalWords() {

    return new Promise(function(resolve, reject) {
        NonLexicalWord.find({})
            .then(function(resultArr) {
                let nonLexicalWordsArr = resultArr.map(function(resultObj) {
                    return resultObj.word;
                })
                
                resolve(nonLexicalWordsArr);
            })
            .catch(function(err) {
                reject(err);
            })
    })
}

/**
 * Add one non-lexical word to database
 * @param {string} word 
 * @returns {Promise}
 */
function addNonLexicalWord(word) {

    return new Promise(function(resolve, reject) {
        NonLexicalWord.create({
            word: word
        })
            .then(function(entryObj) {
                resolve(entryObj);
            })
            .catch(function(err) {
                reject(err);
            })
    })
}

module.exports = {
    getAllNonLexicalWords,
    addNonLexicalWord
}