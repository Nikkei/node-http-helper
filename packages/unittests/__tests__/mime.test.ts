import test from 'ava';

import { Mime } from '@nikkei/http-helper';

test('Mime exported items', (t) => {
    t.snapshot(Mime);
});
