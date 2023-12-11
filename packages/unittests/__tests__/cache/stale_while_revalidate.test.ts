import { test, expect } from 'vitest';

import { Value } from '@nikkei/http-helper/cache';

const staleWhileRevalidate = Value.staleWhileRevalidate;

test('valid case', () => {
    const input = 1215641321231;
    const actual = staleWhileRevalidate(input);
    expect(actual).toBe(`stale-while-revalidate=1215641321231`);
});

test('pass float', () => {
    const input = 3.1415;

    expect(() => {
        staleWhileRevalidate(input);
    }).toThrowError(TypeError);
});

test('pass negative number', () => {
    const input = -1;

    expect(() => {
        staleWhileRevalidate(input);
    }).toThrowError(RangeError);
});

test('pass 0 as the argument', () => {
    const actual = staleWhileRevalidate(0);
    expect(actual).toBe(`stale-while-revalidate=0`);
});
