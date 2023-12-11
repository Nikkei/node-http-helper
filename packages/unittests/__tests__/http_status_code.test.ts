import { test, expect } from 'vitest';

import { HttpStatus } from '@nikkei/http-helper';

test('HttpStatus exported items', () => {
    expect(HttpStatus).toMatchSnapshot();
});
