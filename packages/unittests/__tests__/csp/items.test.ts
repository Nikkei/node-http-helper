import test from 'ava';

import * as CSP from '@nikkei/http-helper/csp';

test('CSP exported items', (t) => {
    t.snapshot(CSP);
});
