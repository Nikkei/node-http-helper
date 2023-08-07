import { test, expect, describe } from 'vitest';
import type { Nullable } from 'option-t/Nullable/Nullable';
import { serializeDirective } from '@nikkei/http-helper/csp';

describe('serializeDirective: should throw if string to 2nd argument directly', () => {
    const NAME = 'test-directive';
    test('typeof === "string" should throw', () => {
        expect(() => serializeDirective(NAME, 'blahblah')).toThrowError(
            new TypeError(`For ${NAME} construction, sources must not be string.`),
        );
    });

    test('`instanceof String` should throw', () => {
        expect(() => serializeDirective(NAME, new String('blahblah'))).toThrowError(
            new TypeError(`For ${NAME} construction, sources must not be string.`),
        );
    });
});

{
    const NAME = 'test-directive';

    const testcaseList: Array<[title: string, input: Iterable<Nullable<string>>, expected: string]> = [
        // @prettier-ignore
        ['empty iterable', [], `${NAME} `],
        ['some values', ['1', '2', '3'], `${NAME} 1 2 3`],
        ['some values containing null', ['1', null, '2', null, '3'], `${NAME} 1 2 3`],
    ];
    for (const [title, input, expected] of testcaseList) {
        test(`serializeDirective: ${title}`, () => {
            const actual = serializeDirective(NAME, input);
            expect(actual).toStrictEqual(expected);
        });
    }
}
