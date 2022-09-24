import sum from '../src/sum';

describe('sum module', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
