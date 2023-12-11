import { test, expect } from 'vitest';

import { HttpHeaderName } from '@nikkei/http-helper';

test('HttpHeaderName exported items', () => {
    expect(HttpHeaderName).toMatchSnapshot();
});
