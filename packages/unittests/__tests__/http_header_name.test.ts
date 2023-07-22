import test from 'ava';

import { HttpHeaderName } from '@nikkei/http-helper';

test('HttpHeaderName exported items', (t) => {
    t.snapshot(HttpHeaderName);
});
