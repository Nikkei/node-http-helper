import test from 'ava';

import { SecFetchDest } from '@nikkei/http-helper/sec_fetch';

test('SecFetchDest exported items', (t) => {
    t.snapshot(SecFetchDest);
});
