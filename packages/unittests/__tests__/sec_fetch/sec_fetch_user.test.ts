import test from 'ava';

import { SecFetchUser } from '@nikkei/http-helper/sec_fetch';

test('SecFetchUser exported items', (t) => {
    t.snapshot(SecFetchUser);
});
