import test from 'ava';

import { Value } from '@nikkei/http-helper/cache';

const staleWhileRevalidate = Value.staleWhileRevalidate;

test('valid case', (t) => {
    const input = 1215641321231;
    const actual = staleWhileRevalidate(input);
    t.is(actual, `stale-while-revalidate=1215641321231`);
});

test('pass float', (t) => {
    const input = 3.1415;

    t.throws(
        () => {
            staleWhileRevalidate(input);
        },
        {
            instanceOf: TypeError,
        },
    );
});

test('pass negative number', (t) => {
    const input = -1;

    t.throws(
        () => {
            staleWhileRevalidate(input);
        },
        {
            instanceOf: RangeError,
        },
    );
});

test('pass 0 as the argument', (t) => {
    const actual = staleWhileRevalidate(0);
    t.is(actual, `stale-while-revalidate=0`);
});
