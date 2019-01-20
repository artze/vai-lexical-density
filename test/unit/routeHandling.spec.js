const request = require('request');
const expect = require('chai').expect;
const domainUrl = require('../config/config').domainUrl;
const complexityApiUrl = domainUrl + '/complexity'

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
                url: complexityApiUrl,
                json: true,
                body: {}
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(400);
                done();
            })
        })
    })

    describe('send POST request to incorrect API url endpoint', function() {
        it('should return response status 404', function(done) {
            request.post({
                url: domainUrl + '/doesnotexist',
                json: true,
                body: {}
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(404);
                expect(body.error).to.equal('ResourceNotFoundError');
                done();
            })
        })
    })

    describe('send POST request to \'/non-lexical-words\' with correct request body', function() {
        it('should return response status 201', function(done) {
            request.post({
                url: domainUrl + '/non-lexical-words',
                json: true,
                body: {}
            }, function(err, res, body) {
                expect(res.statusCode).to.equal(201);
                done();
            })
        })
    })
})