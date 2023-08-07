import { test, expect } from 'vitest';

import { Value } from '@nikkei/http-helper/cache';

const maxAge = Value.maxAge;

test('valid case', () => {
    const input = 1215641321231;
    const actual = maxAge(input);
    expect(actual).toBe(`max-age=1215641321231`);
});

test('pass float', () => {
    const input = 3.1415;

    expect(() => {
        maxAge(input);
    }).toThrowError(TypeError);
});

test('pass negative number', () => {
    const input = -1;

    expect(() => {
        maxAge(input);
    }).toThrowError(RangeError);
});

test('pass 0 as the argument', () => {
    const actual = maxAge(0);
    expect(actual).toBe(`max-age=0`);
});
