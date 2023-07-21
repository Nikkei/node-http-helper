import test from 'ava';

import { Value } from '@nikkei/http-helper/cache';

const staleIfError = Value.staleIfError;

test('valid case', (t) => {
    const input = 1215641321231;
    const actual = staleIfError(input);
    t.is(actual, `stale-if-error=1215641321231`);
});

test('pass float', (t) => {
    const input = 3.1415;

    t.throws(
        () => {
            staleIfError(input);
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
            staleIfError(input);
        },
        {
            instanceOf: RangeError,
        },
    );
});

test('pass 0 as the argument', (t) => {
    const actual = staleIfError(0);
    t.is(actual, `stale-if-error=0`);
});
