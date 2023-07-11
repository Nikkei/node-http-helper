import test from 'ava';
import { schemeSource, hostSource, nonceSource, hashSource, uriReference } from '@nikkei/http-helper/csp';

test('schemeSource', (t) => {
    const actual: string = schemeSource('https');
    t.is(actual, `https:`);
});

test('schemeSource: throw an error', (t) => {
    const input = 'https:';
    t.throws(
        () => {
            schemeSource(input);
        },
        {
            instanceOf: Error,
            message: `scheme should not be ends with :, but the actual is ${input}`,
        },
    );
});

test('hostSource', (t) => {
    const INPUT = 'http://example.com';
    const actual: string = hostSource(INPUT);
    t.is(actual, INPUT);
});

test('nonceSource', (t) => {
    const input = '5a+/6ZmQ54Sh';
    const actual: string = nonceSource(input);
    t.is(actual, `'nonce-${input}'`);
});

{
    const testcaseList = ['sha256', 'sha384', 'sha512'] as const;
    for (const algo of testcaseList) {
        test(`hashSource: ${algo}`, (t) => {
            const base64 = '5a+/6ZmQ54Sh';
            const actual: string = hashSource(algo, base64);
            t.is(actual, `'${algo}-${base64}'`);
        });
    }
}

test('uriReference', (t) => {
    const INPUT = 'http://example.com/report/path';
    const actual: string = uriReference(INPUT);
    t.is(actual, INPUT);
});
