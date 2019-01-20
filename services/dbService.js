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
                let nonLexicalWordArr = resultArr.map(function(resultObj) {
                    return resultObj.word;
                })
                
                resolve(nonLexicalWordArr);
            })
            .catch(function(err) {
                reject(err);
            })
    })
}

module.exports = {
    getAllNonLexicalWords
}