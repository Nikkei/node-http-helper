import { test, expect, beforeAll } from 'vitest';

import { HttpStatus } from '@nikkei/http-helper';
import {
    assertNoLackPatterns,
    assertNoOverlap,
    invalidRangeFrom0To,
    invalidRangeToEndFrom,
    validRange,
} from './helper.js';

const TRUE_RANGE: ReadonlySet<number> = new Set([
    // @prettier-ignore
    ...validRange(400, 499),
]);

const FALSE_RANGE: ReadonlySet<number> = new Set([
    // @prettier-ignore
    ...invalidRangeFrom0To(399),
    ...invalidRangeToEndFrom(500),
]);

beforeAll(() => {
    assertNoOverlap(TRUE_RANGE, FALSE_RANGE);
    assertNoLackPatterns(TRUE_RANGE, FALSE_RANGE);
});

for (const input of TRUE_RANGE) {
    test(`isClientError4xx(): input is \`${String(input)}\``, () => {
        expect(HttpStatus.isClientError4xx(input)).toEqual(true);
    });
}

for (const input of FALSE_RANGE) {
    test(`isClientError4xx(): input is \`${String(input)}\``, () => {
        expect(HttpStatus.isClientError4xx(input)).toEqual(false);
    });
}
