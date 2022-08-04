import test from 'ava';
import { serializeDirective } from '../../src/csp/mod.js';

test('serializeDirective: should throw if string to 2nd argument directly', (t) => {
    const NAME = 'test-directive';

    t.throws(
        () => {
            serializeDirective(NAME, 'blahblah');
        },
        {
            instanceOf: TypeError,
            message: `For ${NAME} construction, sources must not be string.`,
        },
        'typeof === "string" should throw'
    );

    t.throws(
        () => {
            serializeDirective(NAME, new String('blahblah'));
        },
        {
            instanceOf: TypeError,
            message: `For ${NAME} construction, sources must not be string.`,
        },
        '`instanceof String` should throw'
    );
});

{
    const NAME = 'test-directive';

    const testcaseList: Array<[title: string, input: Iterable<string>, expected: string]> = [
        // @prettier-ignore
        ['empty iterable', [], `${NAME} `],
        ['some values', ['1', '2', '3'], `${NAME} 1 2 3`],
    ];
    for (const [title, input, expected] of testcaseList) {
        test(`serializeDirective: ${title}`, (t) => {
            const actual = serializeDirective(NAME, input);
            t.is(actual as string, expected);
        });
    }
}
