"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
var TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';
describe('Token submitted - Multiple space', function () {
    test('Validate "Bearer   _TOKEN_"', function () {
        expect(index_1.normalizeAuthorization("Bearer   " + TOKEN_SAMPLE)).toBe("Bearer " + TOKEN_SAMPLE);
    });
    test('Validate "bearer   _TOKEN_"', function () {
        expect(index_1.normalizeAuthorization("bearer   " + TOKEN_SAMPLE)).toBe("bearer " + TOKEN_SAMPLE);
    });
    test('Validate "BEARER   _TOKEN_"', function () {
        expect(index_1.normalizeAuthorization("BEARER   " + TOKEN_SAMPLE)).toBe("BEARER " + TOKEN_SAMPLE);
    });
});
