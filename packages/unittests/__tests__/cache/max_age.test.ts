import test from 'ava';

import { Value } from '@nikkei/http-helper/cache';

const maxAge = Value.maxAge;

test('valid case', (t) => {
    const input = 1215641321231;
    const actual = maxAge(input);
    t.is(actual, `max-age=1215641321231`);
});

test('pass float', (t) => {
    const input = 3.1415;

    t.throws(
        () => {
            maxAge(input);
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
            maxAge(input);
        },
        {
            instanceOf: RangeError,
        },
    );
});

test('pass 0 as the argument', (t) => {
    const actual = maxAge(0);
    t.is(actual, `max-age=0`);
});
