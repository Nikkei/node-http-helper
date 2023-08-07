import { test, expect } from 'vitest';
import { serializePolicy } from '@nikkei/http-helper/csp';

{
    const testcaseList: Array<[title: string, input: Iterable<string | null>, expected: string]> = [
        // @prettier-ignore
        ['empty arguments', [], ``],
        ['some values', ['1', '2', '3'], `1; 2; 3`],
        ['some values contains null', ['1', null, '2', null, '3', null], `1; 2; 3`],
    ];
    for (const [title, input, expected] of testcaseList) {
        test(`serializePolicy: ${title}`, () => {
            const actual = serializePolicy(...input);
            expect(actual).toStrictEqual(expected);
        });
    }
}
