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

import { unauthorizedResponse } from '../../index';
import * as RestifyErrors from 'restify-errors';

describe('Unauthorized Response', () => {
	test('Code and message', () => {
		const testCode = 'test_error_code';
		const testMessage = 'This is a test message';
		const returnObject = new RestifyErrors.NotAuthorizedError(
			testCode,
			testMessage
		);

		expect(unauthorizedResponse(testCode, testMessage)).toEqual(returnObject);
	});

	test('Code, no Message', () => {
		const testCode = 'test_error_code';
		const testMessage = '';
		const returnObject = new RestifyErrors.NotAuthorizedError(
			testCode,
			testMessage
		);

		expect(unauthorizedResponse(testCode, testMessage)).toEqual(returnObject);
	});

	test('Message, no code', () => {
		const testCode = '';
		const testMessage = 'This is a test message';
		const returnObject = new RestifyErrors.NotAuthorizedError(
			testCode,
			testMessage
		);

		expect(unauthorizedResponse(testCode, testMessage)).toEqual(returnObject);
	});
});
