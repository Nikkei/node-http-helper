import test from 'ava';
import { buildCacheControlValue, Value, ResponseDirective } from '@nikkei/http-helper/cache';

test('valid case', (t) => {
    const actual = buildCacheControlValue(
        // @prettier-ignore
        ResponseDirective.PRIVATE,
        ResponseDirective.NO_STORE,
        Value.maxAge(0),
    );
    t.is(actual, 'private, no-store, max-age=0');
});

test('call without any arguments', (t) => {
    t.throws(
        () => {
            buildCacheControlValue();
        },
        {
            instanceOf: RangeError,
            message: `items must be > 0`,
        },
    );
});
