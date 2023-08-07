import { test, expect } from 'vitest';

import * as Auth from '@nikkei/http-helper/auth';

test('Auth exported items', () => {
    expect(Auth).toMatchSnapshot();
});
