import { test, expect } from 'vitest';

import { Value } from '@nikkei/http-helper/cache';

const sMaxAge = Value.sMaxAge;

test('valid case', () => {
    const input = 1215641321231;
    const actual = sMaxAge(input);
    expect(actual).toBe(`s-maxage=1215641321231`);
});

test('pass float', () => {
    const input = 3.1415;

    expect(() => {
        sMaxAge(input);
    }).toThrow(TypeError);
});

test('pass negative number', () => {
    const input = -1;

    expect(() => {
        sMaxAge(input);
    }).toThrow(RangeError);
});

test('pass 0 as the argument', () => {
    const actual = sMaxAge(0);
    expect(actual).toBe(`s-maxage=0`);
});
