import { test, expect } from 'vitest';

import { bearerAuthValue } from '@nikkei/http-helper/auth';

test('bearerAuthValue() should be expected result', () => {
    const input = String(Math.random());
    const actual = bearerAuthValue(input);
    expect(actual).toStrictEqual(`Bearer ${input}`);
});
