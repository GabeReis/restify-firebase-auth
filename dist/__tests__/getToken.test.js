"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
var TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';
describe('Token submitted - Single space', function () {
    test('Validate "Bearer _TOKEN_"', function () {
        expect(index_1.getToken("Bearer " + TOKEN_SAMPLE)).toBe(TOKEN_SAMPLE);
    });
    test('Validate "bearer _TOKEN_"', function () {
        expect(index_1.getToken("bearer " + TOKEN_SAMPLE)).toBe(TOKEN_SAMPLE);
    });
    test('Validate "BEARER _TOKEN_"', function () {
        expect(index_1.getToken("bearer " + TOKEN_SAMPLE)).toBe(TOKEN_SAMPLE);
    });
});
describe('Token submitted - Multiple space', function () {
    test('Validate "Bearer   _TOKEN_"', function () {
        expect(index_1.getToken("Bearer   " + TOKEN_SAMPLE)).toBe(TOKEN_SAMPLE);
    });
    test('Validate "bearer   _TOKEN_"', function () {
        expect(index_1.getToken("bearer   " + TOKEN_SAMPLE)).toBe(TOKEN_SAMPLE);
    });
    test('Validate "BEARER   _TOKEN_"', function () {
        expect(index_1.getToken("bearer   " + TOKEN_SAMPLE)).toBe(TOKEN_SAMPLE);
    });
});
describe('No token submitted - Single space', function () {
    test('Validate "Bearer "', function () {
        expect(index_1.getToken("Bearer ")).toBe('');
    });
    test('Validate "bearer "', function () {
        expect(index_1.getToken("bearer ")).toBe('');
    });
    test('Validate "BEARER "', function () {
        expect(index_1.getToken("bearer ")).toBe('');
    });
});
describe('No token submitted - No space', function () {
    test('Validate "Bearer"', function () {
        expect(index_1.getToken("Bearer")).toBe('');
    });
    test('Validate "bearer"', function () {
        expect(index_1.getToken("bearer")).toBe('');
    });
    test('Validate "BEARER"', function () {
        expect(index_1.getToken("bearer")).toBe('');
    });
});
