import test from 'ava';

import { RequestDirective, ResponseDirective, Value } from '@nikkei/http-helper/cache';

test('RequestDirective entries', (t) => {
    t.snapshot(RequestDirective);
});

test('ResponseDirective entries', (t) => {
    t.snapshot(ResponseDirective);
});

test('Value entries', (t) => {
    t.snapshot(Value);
});
