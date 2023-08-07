import { test, expect } from 'vitest';

import { SecFetchMode } from '@nikkei/http-helper/sec_fetch';

test('SecFetchMode exported items', () => {
    expect(SecFetchMode).toMatchSnapshot();
});
