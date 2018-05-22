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

import * as FirebaseAdmin from 'firebase-admin';
import * as FS from 'fs';
import * as Path from 'path';
import Chalk from 'chalk';
import Firebase from '@firebase/app';
import '@firebase/auth';
import RestifyFirebaseAuth from '../../index'
import { random } from 'lodash';

let apiKey: string;
let databaseUrl: string;
let firebaseApp: FirebaseAdmin.app.App;
let projectId: string;
let storageBucket: string;
let token: string;

const newUserUid = generateRandomString(20);

beforeAll(async () => {
	let serviceAccount: any;
	try {
		serviceAccount = require('../resources/key.json');
	} catch (error) {
		console.log(
			Chalk.red(
				'The integration test suite requires a service account JSON file for a ' +
					'Firebase project to be saved to `test/resources/key.json`.',
				error
			)
		);
		throw error;
	}

	try {
	  apiKey = FS.readFileSync(Path.join(__dirname, '../resources/apikey.txt')).toString();
	} catch (error) {
	  console.log(Chalk.red(
	    'The integration test suite requires an API key for a ' +
	    'Firebase project to be saved to `test/resources/apikey.txt`.',
	    error,
	  ));
	  throw error;
	}

	projectId = serviceAccount.project_id;
	databaseUrl = 'https://' + projectId + '.firebaseio.com';
	storageBucket = projectId + '.appspot.com';

	firebaseApp = FirebaseAdmin.initializeApp({
	  credential: FirebaseAdmin.credential.cert(serviceAccount),
	  databaseURL: databaseUrl,
	  storageBucket,
  });

	Firebase.initializeApp({
		apiKey,
		authDomain: projectId + '.firebaseapp.com'
	});

  token = await FirebaseAdmin.auth().createCustomToken(newUserUid, {
    isAdmin: true
	})	
});

// TODO: Implement real test
test('Validate Authorization', () => {
	expect(RestifyFirebaseAuth({
		firebase: firebaseApp
	})).not.toBe(1);
});

/**
 * Generate a random string of the specified length, optionally using the specified alphabet.
 *
 * @param {number} length The length of the string to generate.
 * @return {string} A random string of the provided length.
 */
export function generateRandomString(length: number): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < length; i++) {
    text += alphabet.charAt(random(alphabet.length - 1));
  }
  return text;
}
