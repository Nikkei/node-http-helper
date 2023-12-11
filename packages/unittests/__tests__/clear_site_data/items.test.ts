import { test, expect } from 'vitest';

import { ClearSiteData } from '@nikkei/http-helper';

test('ClearSiteData entries', () => {
    expect(ClearSiteData).toMatchSnapshot();
});
