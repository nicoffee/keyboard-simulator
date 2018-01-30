import { generateRandomLettersArray, formatTime } from './../utils';

describe('formats time', () => {
  test('10 seconds', () => {
    expect(formatTime(10)).toBe('0:10');
  });

  test('100 seconds', () => {
    expect(formatTime(100)).toBe('1:40');
  });

  test('211 seconds', () => {
    expect(formatTime(184)).toBe('3:04');
  });
});

describe('generate random letters array', () => {
  test('20 elements', () => {
    expect(
      generateRandomLettersArray([[48, 57], [1072, 1103]], 20).length
    ).toBe(20);
  });

  test('20 elements with one range', () => {
    expect(generateRandomLettersArray([[0, 100]], 20).length).toBe(20);
  });

  test('20 elements with three ranges', () => {
    expect(
      generateRandomLettersArray([[0, 100], [200, 210], [210, 220]], 20).length
    ).toBe(20);
  });
});
