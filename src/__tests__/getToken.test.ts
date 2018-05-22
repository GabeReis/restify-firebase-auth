import { getToken } from '../lib/index';

const TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';

describe('Token submitted - Single space', () => {

  test('Validate "Bearer _TOKEN_"', () => {
    expect(
      getToken(`Bearer ${TOKEN_SAMPLE}`)
    ).toBe(TOKEN_SAMPLE);
  });

  test('Validate "bearer _TOKEN_"', () => {
    expect(
      getToken(`bearer ${TOKEN_SAMPLE}`)
    ).toBe(TOKEN_SAMPLE);
  });

  test('Validate "BEARER _TOKEN_"', () => {
    expect(
      getToken(`bearer ${TOKEN_SAMPLE}`)
    ).toBe(TOKEN_SAMPLE);
  });
})

describe('Token submitted - Multiple space', () => {

  test('Validate "Bearer   _TOKEN_"', () => {
    expect(
      getToken(`Bearer   ${TOKEN_SAMPLE}`)
    ).toBe(TOKEN_SAMPLE);
  });

  test('Validate "bearer   _TOKEN_"', () => {
    expect(
      getToken(`bearer   ${TOKEN_SAMPLE}`)
    ).toBe(TOKEN_SAMPLE);
  });

  test('Validate "BEARER   _TOKEN_"', () => {
    expect(
      getToken(`bearer   ${TOKEN_SAMPLE}`)
    ).toBe(TOKEN_SAMPLE);
  });
})

describe('No token submitted - Single space', () => {

  test('Validate "Bearer "', () => {
    expect(
      getToken(`Bearer `)
    ).toBe('');
  });

  test('Validate "bearer "', () => {
    expect(
      getToken(`bearer `)
    ).toBe('');
  });

  test('Validate "BEARER "', () => {
    expect(
      getToken(`bearer `)
    ).toBe('');
  });
})

describe('No token submitted - No space', () => {

  test('Validate "Bearer"', () => {
    expect(
      getToken(`Bearer`)
    ).toBe('');
  });

  test('Validate "bearer"', () => {
    expect(
      getToken(`bearer`)
    ).toBe('');
  });

  test('Validate "BEARER"', () => {
    expect(
      getToken(`bearer`)
    ).toBe('');
  });
})
