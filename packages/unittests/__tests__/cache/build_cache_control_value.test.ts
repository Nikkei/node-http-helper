import { test, expect } from 'vitest';
import { buildCacheControlValue, Value, ResponseDirective } from '@nikkei/http-helper/cache';

test('valid case', () => {
    const actual = buildCacheControlValue(
        // @prettier-ignore
        ResponseDirective.PRIVATE,
        ResponseDirective.NO_STORE,
        Value.maxAge(0),
    );
    expect(actual).toBe('private,no-store,max-age=0');
});

test('call without any arguments', () => {
    expect(() => {
        buildCacheControlValue();
    }).toThrowError(new RangeError(`items must be > 0`));
});
