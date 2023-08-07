import { test, expect } from 'vitest';

import { Value } from '@nikkei/http-helper/cache';

const minFresh = Value.minFresh;

test('valid case', () => {
    const input = 1215641321231;
    const actual = minFresh(input);
    expect(actual).toBe(`min-fresh=1215641321231`);
});

test('pass float', () => {
    const input = 3.1415;

    expect(() => {
        minFresh(input);
    }).toThrowError(TypeError);
});

test('pass negative number', () => {
    const input = -1;

    expect(() => {
        minFresh(input);
    }).toThrowError(RangeError);
});

test('pass 0 as the argument', () => {
    const actual = minFresh(0);
    expect(actual).toBe(`min-fresh=0`);
});
