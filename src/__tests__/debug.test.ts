import { debug } from '../lib/index';

describe('Debug - String', () => {

  test('Debug', () => {
    expect(
      debug(`Test Message`, true)
    ).toBe(true);
  });

  test('Debug', () => {
    expect(
      debug(`Test Message`, false)
    ).toBe(false);
  });
})
