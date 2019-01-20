// @ts-check

const normalizeText = require('./normalizeText');

/**
 * Compute text complexity by measuring lexical density in a single sentence
 * @param {string} textInput 
 * @param {Array<string>} nonLexicalWords
 * @returns {number} 
 */
function computeOverallLexicalDensity(textInput, nonLexicalWords) {
    
    // Transform all nonLexicalWord references to lower case
    nonLexicalWords = nonLexicalWords.map(function(word) {
        return word.toLowerCase();
    })
    
    // Normalize text input and initialize variables for lexical density calculation
    const normalizedTextInput = normalizeText(textInput);
    const normalizedTextInputArr = normalizedTextInput.split(' ');
    const totalWordCount = normalizedTextInputArr.length;
    let lexicalWordCount = 0;

    normalizedTextInputArr.forEach(function(word) {
        if (!nonLexicalWords.includes(word)) {
            lexicalWordCount++
        }
    })

    const result = parseFloat((lexicalWordCount / totalWordCount).toFixed(2));
    
    return result;
}

/**
 * Compute text complexity by measuring lexical density in each sentence separated by 'period'
 * @param {string} textInput
 * @param {Array<string>} nonLexicalWords
 * @returns {Array<number>} 
 */
function computeLexicalDensityOfEachSentence(textInput, nonLexicalWords) {

    // Split sentences by 'period' and remove empty string element in array produced by 'period' at the very end of textInput
    let sentencesArr = textInput.split('.');

    sentencesArr = sentencesArr.filter(function(sentence) {
        return sentence.length > 0;
    });
    
    const result = sentencesArr.map(function(sentence) {
        return computeOverallLexicalDensity(sentence, nonLexicalWords);
    })
    
    return result;
}

module.exports = {
    computeOverallLexicalDensity,
    computeLexicalDensityOfEachSentence
}
