/*
 * Copyright (c) 2018 Gabriel Reis
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at:
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

import { isAuthorizationValid } from '../../index';

const TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';

describe('Bearer submitted - Multiple space', () => {
	test('Validate "Bearer   _TOKEN_"', () => {
		expect(isAuthorizationValid(`Bearer   ${TOKEN_SAMPLE}`)).toBe(true);
	});

	test('Validate "bearer   _TOKEN_"', () => {
		expect(isAuthorizationValid(`bearer   ${TOKEN_SAMPLE}`)).toBe(true);
	});

	test('Validate "BEARER   _TOKEN_"', () => {
		expect(isAuthorizationValid(`BEARER   ${TOKEN_SAMPLE}`)).toBe(true);
	});
});

describe('Beaver submitted - Multiple space', () => {
	test('Validate "Bearer   _TOKEN_"', () => {
		expect(isAuthorizationValid(`Beaver   ${TOKEN_SAMPLE}`)).toBe(false);
	});

	test('Validate "bearer   _TOKEN_"', () => {
		expect(isAuthorizationValid(`beaver   ${TOKEN_SAMPLE}`)).toBe(false);
	});

	test('Validate "BEARER   _TOKEN_"', () => {
		expect(isAuthorizationValid(`BEAVER   ${TOKEN_SAMPLE}`)).toBe(false);
	});
});

describe('Bearer submitted - Single space', () => {
	test('Validate "Bearer _TOKEN_"', () => {
		expect(isAuthorizationValid(`Bearer ${TOKEN_SAMPLE}`)).toBe(true);
	});

	test('Validate "bearer _TOKEN_"', () => {
		expect(isAuthorizationValid(`bearer ${TOKEN_SAMPLE}`)).toBe(true);
	});

	test('Validate "BEARER _TOKEN_"', () => {
		expect(isAuthorizationValid(`BEARER ${TOKEN_SAMPLE}`)).toBe(true);
	});
});

describe('Beaver submitted - Single space', () => {
	test('Validate "Bearer _TOKEN_"', () => {
		expect(isAuthorizationValid(`Beaver ${TOKEN_SAMPLE}`)).toBe(false);
	});

	test('Validate "bearer _TOKEN_"', () => {
		expect(isAuthorizationValid(`beaver ${TOKEN_SAMPLE}`)).toBe(false);
	});

	test('Validate "BEARER _TOKEN_"', () => {
		expect(isAuthorizationValid(`BEAVER ${TOKEN_SAMPLE}`)).toBe(false);
	});
});
