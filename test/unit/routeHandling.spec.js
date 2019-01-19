const request = require('request');
const expect = require('chai').expect;
const complexityApiUrl = 'http://localhost:3000/complexity'

describe('Route handling', function() {
    describe('send POST request to \'/complexity\' with correct request body', function() {        
        it('should return response status 200', function(done) {
            const requestBody = {
                textInput: 'A quick brown fox jumps over the lazy dog.'
            }
            request.post({
                url: complexityApiUrl,
                json: true,
                body: requestBody
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(200);
                done();
            })
        })
    })

    describe('send POST request to \'/complexity\' with empty request body', function() {
        it('should return response status 400', function(done) {
            request.post({
                url: complexityApiUrl
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(400);
                done();
            })
        })
    })
})