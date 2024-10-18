import { isNotNull, type Nullable } from '../internals/nullable.js';

// https://w3c.github.io/webappsec-csp/#grammardef-serialized-policy
export function serializePolicy(...values: Array<Nullable<string>>) {
    const nonNull = values.filter(isNotNull);
    const result = nonNull.join('; ');
    return result;
}
