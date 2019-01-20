const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nonLexicalWordSchema = new Schema({
    word: String
});

const NonLexicalWord = mongoose.model('NonLexicalWord', nonLexicalWordSchema);

module.exports = NonLexicalWord;
