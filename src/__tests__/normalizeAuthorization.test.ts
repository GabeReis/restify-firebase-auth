import { normalizeAuthorization } from '../lib/index';

const TOKEN_SAMPLE = 'MR3nGR4uYb7C5e97z7MM7zs87E64Mv7sEU6as3y69GtQy3rj';

describe('Token submitted - Multiple space', () => {

  test('Validate "Bearer   _TOKEN_"', () => {
    expect(
      normalizeAuthorization(`Bearer   ${TOKEN_SAMPLE}`)
    ).toBe(`Bearer ${TOKEN_SAMPLE}`);
  });

  test('Validate "bearer   _TOKEN_"', () => {
    expect(
      normalizeAuthorization(`bearer   ${TOKEN_SAMPLE}`)
    ).toBe(`bearer ${TOKEN_SAMPLE}`);
  });

  test('Validate "BEARER   _TOKEN_"', () => {
    expect(
      normalizeAuthorization(`BEARER   ${TOKEN_SAMPLE}`)
    ).toBe(`BEARER ${TOKEN_SAMPLE}`);
  });
})
