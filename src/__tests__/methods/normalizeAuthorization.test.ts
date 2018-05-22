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

import { normalizeAuthorization } from '../../index';

const TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';

describe('Token submitted - Multiple space', () => {
	test('Validate "Bearer   _TOKEN_"', () => {
		expect(normalizeAuthorization(`Bearer   ${TOKEN_SAMPLE}`)).toBe(
			`Bearer ${TOKEN_SAMPLE}`
		);
	});

	test('Validate "bearer   _TOKEN_"', () => {
		expect(normalizeAuthorization(`bearer   ${TOKEN_SAMPLE}`)).toBe(
			`bearer ${TOKEN_SAMPLE}`
		);
	});

	test('Validate "BEARER   _TOKEN_"', () => {
		expect(normalizeAuthorization(`BEARER   ${TOKEN_SAMPLE}`)).toBe(
			`BEARER ${TOKEN_SAMPLE}`
		);
	});
});
