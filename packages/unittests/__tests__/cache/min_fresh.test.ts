import test from 'ava';

import { Value } from '@nikkei/http-helper/cache';

const minFresh = Value.minFresh;

test('valid case', (t) => {
    const input = 1215641321231;
    const actual = minFresh(input);
    t.is(actual, `min-fresh=1215641321231`);
});

test('pass float', (t) => {
    const input = 3.1415;

    t.throws(
        () => {
            minFresh(input);
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
            minFresh(input);
        },
        {
            instanceOf: RangeError,
        },
    );
});

test('pass 0 as the argument', (t) => {
    const actual = minFresh(0);
    t.is(actual, `min-fresh=0`);
});
