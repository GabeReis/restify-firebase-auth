import { unauthorizedResponse } from '../lib/index';
import * as RestifyErrors from 'restify-errors';

describe('Unauthorized Response', () => {

  test('Code and message', () => {

    const testCode = 'test_error_code';
    const testMessage = 'This is a test message';
    const returnObject = new RestifyErrors.NotAuthorizedError(testCode, testMessage)

    expect(
      unauthorizedResponse(testCode, testMessage)
    ).toEqual(returnObject);
  });

  test('Code, no Message', () => {

    const testCode = 'test_error_code';
    const testMessage = null;
    const returnObject = new RestifyErrors.NotAuthorizedError(testCode, testMessage)

    expect(
      unauthorizedResponse(testCode, testMessage)
    ).toEqual(returnObject);
  });

  test('Message, no code', () => {

    const testCode = null;
    const testMessage = 'This is a test message';
    const returnObject = new RestifyErrors.NotAuthorizedError(testCode, testMessage)

    expect(
      unauthorizedResponse(testCode, testMessage)
    ).toEqual(returnObject);
  });
})
