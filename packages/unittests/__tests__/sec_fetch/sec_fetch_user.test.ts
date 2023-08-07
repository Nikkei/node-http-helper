import { test, expect } from 'vitest';

import { SecFetchUser } from '@nikkei/http-helper/sec_fetch';

test('SecFetchUser exported items', () => {
    expect(SecFetchUser).toMatchSnapshot();
});
