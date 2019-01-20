// @ts-check
const compare = require('tsscmp');
const storedCredentials = require('../config/credentials');

/**
 * Check incoming request credentials against stored credentials
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean}
 */
function checkCredentials(username, password) {
    let valid = true;

    valid = compare(username, storedCredentials.NON_LEXICAL_WORD_AUTH_USERNAME) && valid;
    valid = compare(password, storedCredentials.NON_LEXICAL_WORD_AUTH_PASSWORD) && valid;

    return valid;
}

module.exports = {
    checkCredentials
}
