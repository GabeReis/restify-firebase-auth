import { isAuthorizationValid } from '../lib/index';

const TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';

describe('Bearer submitted - Multiple space', () => {

  test('Validate "Bearer   _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`Bearer   ${TOKEN_SAMPLE}`)
    ).toBe(true);
  });

  test('Validate "bearer   _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`bearer   ${TOKEN_SAMPLE}`)
    ).toBe(true);
  });

  test('Validate "BEARER   _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`BEARER   ${TOKEN_SAMPLE}`)
    ).toBe(true);
  });
})

describe('Beaver submitted - Multiple space', () => {

  test('Validate "Bearer   _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`Beaver   ${TOKEN_SAMPLE}`)
    ).toBe(false);
  });

  test('Validate "bearer   _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`beaver   ${TOKEN_SAMPLE}`)
    ).toBe(false);
  });

  test('Validate "BEARER   _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`BEAVER   ${TOKEN_SAMPLE}`)
    ).toBe(false);
  });
})

describe('Bearer submitted - Single space', () => {

  test('Validate "Bearer _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`Bearer ${TOKEN_SAMPLE}`)
    ).toBe(true);
  });

  test('Validate "bearer _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`bearer ${TOKEN_SAMPLE}`)
    ).toBe(true);
  });

  test('Validate "BEARER _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`BEARER ${TOKEN_SAMPLE}`)
    ).toBe(true);
  });
})

describe('Beaver submitted - Single space', () => {

  test('Validate "Bearer _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`Beaver ${TOKEN_SAMPLE}`)
    ).toBe(false);
  });

  test('Validate "bearer _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`beaver ${TOKEN_SAMPLE}`)
    ).toBe(false);
  });

  test('Validate "BEARER _TOKEN_"', () => {
    expect(
      isAuthorizationValid(`BEAVER ${TOKEN_SAMPLE}`)
    ).toBe(false);
  });
})
