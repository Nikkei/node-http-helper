import test from 'ava';

import { Value } from '@nikkei/http-helper/cache';

const maxStale = Value.maxStale;

test('valid case', (t) => {
    const input = 1215641321231;
    const actual = maxStale(input);
    t.is(actual, `max-stale=1215641321231`);
});

test('pass float', (t) => {
    const input = 3.1415;

    t.throws(
        () => {
            maxStale(input);
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
            maxStale(input);
        },
        {
            instanceOf: RangeError,
        },
    );
});

test('pass 0 as the argument', (t) => {
    const actual = maxStale(0);
    t.is(actual, `max-stale=0`);
});
