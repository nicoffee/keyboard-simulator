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
    test('10 elements', () => {
        expect(generateRandomLettersArray(1072, 1103, 10).length).toBe(10);
    });
});