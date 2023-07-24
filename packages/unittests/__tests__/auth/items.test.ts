import test from 'ava';

import * as Auth from '@nikkei/http-helper/auth';

test('Auth exported items', (t) => {
    t.snapshot(Auth);
});
