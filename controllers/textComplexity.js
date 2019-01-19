// @ts-check

const analyzeText = require('../lib/analyzeText');
const validate = require('../lib/validate');
const InvalidInputError = require('../errors/InvalidInputError');
const InputLengthExceededError = require('../errors/InputLengthExceededError');

function computeTextComplexity(req, res, next) {
    
    const textInput = req.body.textInput;
    // Validate empty request body
    try {
        if (!textInput) {
            throw new InvalidInputError('Text input cannot be empty');
        }
    } catch(err) {
        next(err);
        return;
    }
    
    // Validate input text length
    try {
        if (!validate.textInputLength(textInput)) {
            throw new InputLengthExceededError('Input length exceeded allowed limit');
        }
    } catch(err) {
        next(err);
        return;
    }
    
    // Handle valid input and respond with result
    const verboseMode = req.query.mode === 'verbose' ? true : false;

    if (verboseMode) {
        const sentence_ld = analyzeText.computeLexicalDensityOfEachSentence(textInput);
        const overall_ld = analyzeText.computeOverallLexicalDensity(textInput);
        const resultObj = {
            data: {
                sentence_ld: sentence_ld,
                overall_ld: overall_ld
            }
        }

        res.status(200).json(resultObj);
    } else {
        const overall_ld = analyzeText.computeOverallLexicalDensity(textInput);
        const resultObj = {
            data: {
                overall_ld: overall_ld
            }
        }

        res.status(200).json(resultObj);
    }
}

module.exports = {
    computeTextComplexity
}