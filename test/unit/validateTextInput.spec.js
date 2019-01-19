const expect = require('chai').expect;
const validate = require('../../lib/validate');
const testData = require('../data/testData');

describe('Text input validation', function() {
    describe('Text input length within limit', function() {
        it('Should pass validation', function() {
            const text = 'A quick brown fox jumps over the lazy dog';
            expect(validate.textInputLength(text)).to.equal(true);
        })
    })

    describe('Text input length exceeds 100 words', function() {
        it('Should fail validation', function() {
            const text = testData.hundredAndOneWords;
            expect(validate.textInputLength(text)).to.equal(false);
        })
    })

    describe('Text input length exceeds 1000 characters', function() {
        it('Should fail validation', function() {
            const text = testData.thousandAndOneChars;
            expect(validate.textInputLength(text)).to.equal(false);
        })
    })
})
