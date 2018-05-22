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

const Debug = require('debug');
import { Request, Response, Next } from 'restify';
import * as Messages from './constants/Messages';
import * as RestifyErrors from 'restify-errors';
import IOptions from './interfaces/IOptions';

let verbose = false;

/**
 * Implements a middleware to validate endpoints using Firebase Auth
 * @param {Request} req -
 * @param {Response} res -
 * @param {Next} next -
 */
export default (options: IOptions) => {
	// Enable verbose mode
	if (options.verbose) {
		verbose = true;
	}

	return (req: Request, res: Response, next: Next) => {
		// Get the authorization string from the header
		const authorization = req.header('Authorization');
		if (authorization) {
			// If authorization has an invalid format
			if (!isAuthorizationValid(authorization)) {
				res.send(
					unauthorizedResponse(
						'credentials_bad_format',
						Messages.UNAUTHORIZED_ERROR_CREDENTIALS_BAD_FORMAT
					)
				);
			}

			// Get an existing Firebase connection
			const firebaseAdmin = options.firebase;

			// Get token from authorization
			const token = getToken(authorization);
			firebaseAdmin
				.auth()
				.verifyIdToken(token)
				.then(decodedToken => {
					debug(Messages.AUTHORIZED_MESSAGE);
					next();
				})
				.catch(err => {
					res.send(
						unauthorizedResponse(
							'invalid_token',
							Messages.UNAUTHORIZED_ERROR_INVALID_TOKEN
						)
					);
				});
		} else {
			res.send(
				unauthorizedResponse(
					'credentials_required',
					Messages.UNAUTHORIZED_ERROR_NO_AUTHORIZATION
				)
			);
		}
	};
};

export const unauthorizedResponse = (
	errorCode: string,
	errorMessage: string
): RestifyErrors.NotAuthorizedError => {
	debug(errorMessage);
	return new RestifyErrors.NotAuthorizedError(errorCode, errorMessage);
};

export const debug = (
	message: string,
	forceVerbose: boolean | null = null
): boolean => {
	if (verbose || forceVerbose) {
		Debug(message);
		return true;
	} else {
		return false;
	}
};

export const getToken = (authorization: string): string => {
	if (!isAuthorizationValid(authorization)) {
		return '';
	}
	const [scheme, token] = normalizeAuthorization(authorization).split(' ');
	return token;
};

export const isAuthorizationValid = (authorization: string): boolean => {
	const [scheme, token] = normalizeAuthorization(authorization).split(' ');
	if (/^Bearer$/i.test(scheme) && token) {
		return true;
	} else {
		return false;
	}
};

export const normalizeAuthorization = (authorization: string): string => {
	return authorization.replace(/\s\s+/g, ' ');
};
