import test from 'ava';

import { Value } from '@nikkei/http-helper/cache';

const sMaxAge = Value.sMaxAge;

test('valid case', (t) => {
    const input = 1215641321231;
    const actual = sMaxAge(input);
    t.is(actual, `s-maxage=1215641321231`);
});

test('pass float', (t) => {
    const input = 3.1415;

    t.throws(
        () => {
            sMaxAge(input);
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
            sMaxAge(input);
        },
        {
            instanceOf: RangeError,
        },
    );
});

test('pass 0 as the argument', (t) => {
    const actual = sMaxAge(0);
    t.is(actual, `s-maxage=0`);
});
