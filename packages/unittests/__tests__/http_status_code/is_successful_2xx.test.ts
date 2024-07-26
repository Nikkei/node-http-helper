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
    ...validRange(200, 299),
]);

const FALSE_RANGE: ReadonlySet<number> = new Set([
    // @prettier-ignore
    ...invalidRangeFrom0To(199),
    ...invalidRangeToEndFrom(300),
]);

beforeAll(() => {
    assertNoOverlap(TRUE_RANGE, FALSE_RANGE);
    assertNoLackPatterns(TRUE_RANGE, FALSE_RANGE);
});

for (const input of TRUE_RANGE) {
    test(`isSuccessful2xx(): input is \`${String(input)}\``, () => {
        expect(HttpStatus.isSuccessful2xx(input)).toEqual(true);
    });
}

for (const input of FALSE_RANGE) {
    test(`isSuccessful2xx(): input is \`${String(input)}\``, () => {
        expect(HttpStatus.isSuccessful2xx(input)).toEqual(false);
    });
}
