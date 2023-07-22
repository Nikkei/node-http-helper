import test from 'ava';

import { SecFetchMode } from '@nikkei/http-helper/sec_fetch';

test('SecFetchMode exported items', (t) => {
    t.snapshot(SecFetchMode);
});
