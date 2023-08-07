import { test, expect } from 'vitest';

import { Mime } from '@nikkei/http-helper';

test('Mime exported items', () => {
    expect(Mime).toMatchSnapshot();
});
