import test from 'ava';

import { ClearSiteData } from '@nikkei/http-helper';

test('buildValue()', (t) => {
    const result = ClearSiteData.buildValue(ClearSiteData.CACHE, ClearSiteData.COOKIES);
    t.is(result, '"cache", "cookies"');
});

test('buildValue() without any arguments', (t) => {
    t.throws(
        () => {
            ClearSiteData.buildValue();
        },
        {
            instanceOf: RangeError,
            message: 'items are empty. Please specify some values',
        },
    );
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
    test(`buildValue() passed multiple argumens, parren ${pattern.join(', ')}`, (t) => {
        t.throws(
            () => {
                ClearSiteData.buildValue(...pattern);
            },
            {
                instanceOf: RangeError,
                message: `directives contains \`${ClearSiteData.WILDCARD}\`. Please use only it.`,
            },
        );
    });
}

test(`builValue() with ${ClearSiteData.WILDCARD}`, (t) => {
    const actual = ClearSiteData.buildValue(ClearSiteData.WILDCARD);
    t.is(actual, '"*"');
});
