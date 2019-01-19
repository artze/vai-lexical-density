const expect = require('chai').expect;
const request = require('request');
const complexityApiUrl = 'http://localhost:3000/complexity'

describe('Text complexity API', function() {
    describe('Query text complexity by calling API endpoint', function() {
        it('Should return correct values in correct format', function(done) {
            const requestBody = {
                textInput: 'Kim loves going​ to the cinema'
            }

            request.post({
                url: complexityApiUrl,
                json: true,
                body: requestBody
            }, function(err, res, body) {
                expect(body).to.deep.equal({
                    data: {
                        overall_ld: 0.67
                    }
                })
                done();
            })
        })
    })

    describe('Query text complexity by calling API endpoint in \'verbose\' mode', function() {
        it('Should return correct values in correct format', function(done) {
            const requestBody = {
                textInput: 'Kim loves going​ to the cinema. A quick brown fox jumps over the lazy dog.'
            }

            request.post({
                url: complexityApiUrl + '?mode=verbose',
                json: true,
                body: requestBody
            }, function(err, res, body) {
                expect(body).to.deep.equal({
                    data: {
                        sentence_ld: [0.67, 0.78],
                        overall_ld: 0.73
                    }
                })
                done();
            })
        })
    })
})