import { test, expect } from 'vitest';

import { Value } from '@nikkei/http-helper/cache';

const maxStale = Value.maxStale;

test('valid case', () => {
    const input = 1215641321231;
    const actual = maxStale(input);
    expect(actual).toBe(`max-stale=1215641321231`);
});

test('pass float', () => {
    const input = 3.1415;

    expect(() => {
        maxStale(input);
    }).toThrowError(TypeError);
});

test('pass negative number', () => {
    const input = -1;

    expect(() => {
        maxStale(input);
    }).toThrowError(RangeError);
});

test('pass 0 as the argument', () => {
    const actual = maxStale(0);
    expect(actual).toBe(`max-stale=0`);
});
