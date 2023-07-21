import test from 'ava';

import { ClearSiteData } from '@nikkei/http-helper';

test('ClearSiteData entries', (t) => {
    t.snapshot(ClearSiteData);
});
