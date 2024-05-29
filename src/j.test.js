import j from './j';

describe('test test', () => {
  test('test 1', () => {
    expect(j).toBeDefined();
  });

  test('add', () => {
    expect(j(1, 2)).toBe(3);
  });
});
