import { test, expect } from 'vitest';

import * as CSP from '@nikkei/http-helper/csp';

test('CSP exported items', () => {
    expect(CSP).toMatchSnapshot();
});
