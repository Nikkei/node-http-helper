import test from 'ava';

import { HttpStatus } from '@nikkei/http-helper';

test('HttpStatus exported items', (t) => {
    t.snapshot(HttpStatus);
});
