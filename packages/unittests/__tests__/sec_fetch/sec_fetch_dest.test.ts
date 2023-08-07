import { test, expect } from 'vitest';

import { SecFetchDest } from '@nikkei/http-helper/sec_fetch';

test('SecFetchDest exported items', () => {
    expect(SecFetchDest).toMatchSnapshot();
});
