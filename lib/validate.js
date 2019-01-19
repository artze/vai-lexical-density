// @ts-check

const normalizeText = require('./normalizeText');
const inputConstraints = require('../config/inputConstraints');

/**
 * Validate text input length. Returns true if validation passes, false otherwise
 * @param {string} text 
 * @returns {boolean}
 */
function textInputLength(text) {

    const normalizedText = normalizeText(text);

    // Calculate word count
    const wordCount = normalizedText.split(' ').length;

    // Calculate char count
    const charCount = text.length

    if (wordCount > inputConstraints.wordCountLimit) {
        return false;
    } else if (charCount > inputConstraints.charCountLImit) {
        return false;
    }

    return true;
}

module.exports = {
    textInputLength
}