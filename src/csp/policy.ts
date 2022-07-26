// https://w3c.github.io/webappsec-csp/#grammardef-serialized-policy
export function serializePolicy(...values: Array<string>) {
    const result = values.join('; ');
    return result;
}
