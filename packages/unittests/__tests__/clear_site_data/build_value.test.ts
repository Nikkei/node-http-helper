import { test, expect } from 'vitest';

import { ClearSiteData } from '@nikkei/http-helper';

test('buildValue()', () => {
    const result = ClearSiteData.buildValue(ClearSiteData.CACHE, ClearSiteData.COOKIES);
    expect(result).toBe('"cache", "cookies"');
});

test('buildValue() without any arguments', () => {
    expect(() => {
        ClearSiteData.buildValue();
    }).toThrowError(new RangeError('items are empty. Please specify some values'));
});

const PATTERN_LIST = [
    // wildcard is placed at the last.
    [ClearSiteData.CACHE, ClearSiteData.COOKIES, ClearSiteData.WILDCARD],
    // wildcard is placed at the middle.
    [ClearSiteData.CACHE, ClearSiteData.WILDCARD, ClearSiteData.COOKIES],
    // wildcard is placed at the first.
    [ClearSiteData.WILDCARD, ClearSiteData.CACHE, ClearSiteData.COOKIES],
];

for (const pattern of PATTERN_LIST) {
    test(`buildValue() passed multiple argumens, parren ${pattern.join(', ')}`, () => {
        expect(() => {
            ClearSiteData.buildValue(...pattern);
        }).toThrowError(new RangeError(`directives contains \`${ClearSiteData.WILDCARD}\`. Please use only it.`));
    });
}

test(`builValue() with ${ClearSiteData.WILDCARD}`, () => {
    const actual = ClearSiteData.buildValue(ClearSiteData.WILDCARD);
    expect(actual).toBe('"*"');
});
