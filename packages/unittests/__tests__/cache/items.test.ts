import { test, expect } from 'vitest';

import { RequestDirective, ResponseDirective, Value } from '@nikkei/http-helper/cache';

test('RequestDirective entries', () => {
    expect(RequestDirective).toMatchSnapshot();
});

test('ResponseDirective entries', () => {
    expect(ResponseDirective).toMatchSnapshot();
});

test('Value entries', () => {
    expect(Value).toMatchSnapshot();
});
