// @ts-check

/**
 * Normalize text to set all strings to lower case, remove redundant whitespaces & non-word characters
 * @param {string} text 
 * @return {string}
 */
module.exports = function (text) {
      
    let normalizedText = text.toLowerCase();
    normalizedText = normalizedText.replace(/\s+/gi, ' ')
    normalizedText = normalizedText.trim();
    normalizedText = normalizedText.replace(/[^a-zA-Z\s]/gi, '')

    return normalizedText;
}
