const expect = require('chai').expect;
const analyzeText = require('../../lib/analyzeText');
const db = require('../../db');
const dbService = require('../../services/dbService');

describe('Text complexity computation', function() {
    let nonLexicalWordsArr;
    before(function() {
        db.init();
        return new Promise(function(resolve, reject) {
            dbService.getAllNonLexicalWords()
                .then(function(result) {
                    nonLexicalWordsArr = result;
                    resolve();
                })
        })
    })
    describe('Compute overall text complexity', function() {
        it('should return correct complexity result', function() {
            const complexityResult = analyzeText.computeOverallLexicalDensity('Kim loves going​ to the cinema', nonLexicalWordsArr)
            expect(complexityResult).to.equal(0.67);
        })
    })
    
    describe('Compute text complexity of each sentence', function() {
        it('should return correct complexity result', function() {
            const complexityResult = analyzeText.computeLexicalDensityOfEachSentence('Kim loves going​ to the cinema. A quick brown fox jumps over the lazy dog.', nonLexicalWordsArr)
            expect(complexityResult).to.deep.equal([0.67, 0.78]);
        })
    })

    after(function() {
        db.disconnect();
    })
})
