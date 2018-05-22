"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
var TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';
describe('Bearer submitted - Multiple space', function () {
    test('Validate "Bearer   _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("Bearer   " + TOKEN_SAMPLE)).toBe(true);
    });
    test('Validate "bearer   _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("bearer   " + TOKEN_SAMPLE)).toBe(true);
    });
    test('Validate "BEARER   _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("BEARER   " + TOKEN_SAMPLE)).toBe(true);
    });
});
describe('Beaver submitted - Multiple space', function () {
    test('Validate "Bearer   _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("Beaver   " + TOKEN_SAMPLE)).toBe(false);
    });
    test('Validate "bearer   _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("beaver   " + TOKEN_SAMPLE)).toBe(false);
    });
    test('Validate "BEARER   _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("BEAVER   " + TOKEN_SAMPLE)).toBe(false);
    });
});
describe('Bearer submitted - Single space', function () {
    test('Validate "Bearer _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("Bearer " + TOKEN_SAMPLE)).toBe(true);
    });
    test('Validate "bearer _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("bearer " + TOKEN_SAMPLE)).toBe(true);
    });
    test('Validate "BEARER _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("BEARER " + TOKEN_SAMPLE)).toBe(true);
    });
});
describe('Beaver submitted - Single space', function () {
    test('Validate "Bearer _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("Beaver " + TOKEN_SAMPLE)).toBe(false);
    });
    test('Validate "bearer _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("beaver " + TOKEN_SAMPLE)).toBe(false);
    });
    test('Validate "BEARER _TOKEN_"', function () {
        expect(index_1.isAuthorizationValid("BEAVER " + TOKEN_SAMPLE)).toBe(false);
    });
});
