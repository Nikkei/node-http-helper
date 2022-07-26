/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-serialized-source-list
 */
export function serializeSourceList(items: Iterable<string>): string {
    const array = Array.isArray(items) ? items : Array.from(items);
    if (array.length < 1) {
        throw new RangeError(`items are empty. must be set a source`);
    }

    const value = array.join(' ');
    return value;
}
