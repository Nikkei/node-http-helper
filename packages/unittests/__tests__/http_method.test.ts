import test from 'ava';

import { HttpMethod } from '@nikkei/http-helper';

test('HttpMethod exported items', (t) => {
    t.snapshot(HttpMethod);
});
