import { test, expect } from 'vitest';
import type { Nullable } from 'option-t/nullable/nullable';
import { serializeSourceList } from '@nikkei/http-helper/csp';

{
    const testcaseList: Array<[title: string, input: Iterable<Nullable<string>>, expected: string]> = [
        // @prettier-ignore
        ['Array containing empty arguments', [], ``],
        ['Iterable containing empty arguments', [].values(), ``],
        ['Array containing some values', ['1', null, '2', null, '3'], `1 2 3`],
        ['Iterable containg some values', ['1', null, '2', null, '3'].values(), `1 2 3`],
    ];
    for (const [title, input, expected] of testcaseList) {
        test(`serializeSourceList: ${title}`, () => {
            const actual = serializeSourceList(input);
            expect(actual).toStrictEqual(expected);
        });
    }
}
