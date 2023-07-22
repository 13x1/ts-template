import { describe, it, expect } from 'vitest';
import { isEven } from '@/main.js';

describe('isEven to work', () => {
    it('should return true for 2', () => {
        expect(isEven(2)).toBe(true);
    });
    it('should return false for 3', () => {
        expect(isEven(3)).toBe(false);
    });
    it('should work for negative numbers', () => {
        expect(isEven(-2)).toBe(true);
        expect(isEven(-3)).toBe(false);
    });
    it('should work for 0', () => {
        expect(isEven(0)).toBe(true);
    });
});
