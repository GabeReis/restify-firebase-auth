"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../lib/index");
describe('Debug - String', function () {
    test('Debug', function () {
        expect(index_1.debug("Test Message", true)).toBe(true);
    });
    test('Debug', function () {
        expect(index_1.debug("Test Message", false)).toBe(false);
    });
});
