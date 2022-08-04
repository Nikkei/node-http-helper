import test from 'ava';
import { bearerAuthValue } from '../../src/auth/mod.js';

test('bearerAuthValue() should be expected result', (t) => {
    const input = String(Math.random());
    const actual = bearerAuthValue(input);
    t.is(actual, `Bearer ${input}`);
});
