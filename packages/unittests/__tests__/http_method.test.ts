import { test, expect } from 'vitest';

import { HttpMethod } from '@nikkei/http-helper';

test('HttpMethod exported items', () => {
    expect(HttpMethod).toMatchSnapshot();
});
