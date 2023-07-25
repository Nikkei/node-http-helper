import test from 'ava';

import { SecFetchSite } from '@nikkei/http-helper/sec_fetch';

test('SecFetchSite exported items', (t) => {
    t.snapshot(SecFetchSite);
});
