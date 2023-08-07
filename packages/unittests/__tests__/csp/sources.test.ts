import { test, expect } from 'vitest';
import { schemeSource, hostSource, nonceSource, hashSource, uriReference } from '@nikkei/http-helper/csp';

test('schemeSource', () => {
    const actual: string = schemeSource('https');
    expect(actual).toStrictEqual(`https:`);
});

test('schemeSource: throw an error', () => {
    const input = 'https:';
    expect(() => schemeSource(input)).toThrowError(
        new Error(`scheme should not be ends with :, but the actual is ${input}`),
    );
});

test('hostSource', () => {
    const INPUT = 'http://example.com';
    const actual: string = hostSource(INPUT);
    expect(actual).toStrictEqual(INPUT);
});

test('nonceSource', () => {
    const input = '5a+/6ZmQ54Sh';
    const actual: string = nonceSource(input);
    expect(actual).toStrictEqual(`'nonce-${input}'`);
});

{
    const testcaseList = ['sha256', 'sha384', 'sha512'] as const;
    for (const algo of testcaseList) {
        test(`hashSource: ${algo}`, () => {
            const base64 = '5a+/6ZmQ54Sh';
            const actual: string = hashSource(algo, base64);
            expect(actual).toStrictEqual(`'${algo}-${base64}'`);
        });
    }
}

test('uriReference', () => {
    const INPUT = 'http://example.com/report/path';
    const actual: string = uriReference(INPUT);
    expect(actual).toStrictEqual(INPUT);
});
