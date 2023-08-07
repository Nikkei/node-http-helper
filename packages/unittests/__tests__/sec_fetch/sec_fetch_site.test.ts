import { test, expect } from 'vitest';

import { SecFetchSite } from '@nikkei/http-helper/sec_fetch';

test('SecFetchSite exported items', () => {
    expect(SecFetchSite).toMatchSnapshot();
});
