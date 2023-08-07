import { test, expect } from 'vitest';

import { Value } from '@nikkei/http-helper/cache';

const staleIfError = Value.staleIfError;

test('valid case', () => {
    const input = 1215641321231;
    const actual = staleIfError(input);
    expect(actual).toBe(`stale-if-error=1215641321231`);
});

test('pass float', () => {
    const input = 3.1415;

    expect(() => {
        staleIfError(input);
    }).toThrowError(TypeError);
});

test('pass negative number', () => {
    const input = -1;

    expect(() => {
        staleIfError(input);
    }).toThrowError(RangeError);
});

test('pass 0 as the argument', () => {
    const actual = staleIfError(0);
    expect(actual).toBe(`stale-if-error=0`);
});
