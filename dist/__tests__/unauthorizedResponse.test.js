"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
var RestifyErrors = require("restify-errors");
describe('Unauthorized Response', function () {
    test('Code and message', function () {
        var testCode = 'test_error_code';
        var testMessage = 'This is a test message';
        var returnObject = new RestifyErrors.NotAuthorizedError(testCode, testMessage);
        expect(index_1.unauthorizedResponse(testCode, testMessage)).toEqual(returnObject);
    });
    test('Code, no Message', function () {
        var testCode = 'test_error_code';
        var testMessage = null;
        var returnObject = new RestifyErrors.NotAuthorizedError(testCode, testMessage);
        expect(index_1.unauthorizedResponse(testCode, testMessage)).toEqual(returnObject);
    });
    test('Message, no code', function () {
        var testCode = null;
        var testMessage = 'This is a test message';
        var returnObject = new RestifyErrors.NotAuthorizedError(testCode, testMessage);
        expect(index_1.unauthorizedResponse(testCode, testMessage)).toEqual(returnObject);
    });
});
