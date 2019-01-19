const expect = require('chai').expect;
const analyzeText = require('../../lib/analyzeText');

describe('Text complexity computation', function() {

    describe('Compute overall text complexity', function() {
        it('should return correct complexity result', function() {
            const complexityResult = analyzeText.computeOverallLexicalDensity('Kim loves going​ to the cinema')
            expect(complexityResult).to.equal(0.67);
        })
    })
    
    
    describe('Compute text complexity of each sentence', function() {
        it('should return complexity result', function() {
            const complexityResult = analyzeText.computeLexicalDensityOfEachSentence('Kim loves going​ to the cinema. A quick brown fox jumps over the lazy dog.')
            expect(complexityResult).to.deep.equal([0.67, 0.78]);
        })
    })
    
})