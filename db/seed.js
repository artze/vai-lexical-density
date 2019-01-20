// Script to seed database with initial collection of non-lexical words. Run this file once only on new databases.

const db = require('../db');
const NonLexicalWord = require('../db/models/NonLexicalWord');
const nonLexicalWordArr = ["to", "got", "is", "have", "and", "although", "or", "that", "when", "while", "a", "either", "more", "much", "neither", "my", "that", "the", "as", "no", "nor", "not", "at", "between", "in", "of", "without", "I", "you", "he", "she", "it", "we", "they", "anybody", "one"];

let wordCreationPromiseArr = [];

db.init();

nonLexicalWordArr.forEach(function(word) {
    let promise = NonLexicalWord.create({
        word: word
    })
        .then(function(modelObj) {
            console.log(`${modelObj.word} -- added to database`);
        })
        .catch(function(err) {
            console.log(err);
        })
    
    wordCreationPromiseArr.push(promise);
})

Promise.all(wordCreationPromiseArr)
    .then(function() {
        db.disconnect();
        console.log('DB connection closed');
    })
    .catch(function() {
        db.disconnect();
        console.log('DB connection closed');
    })
