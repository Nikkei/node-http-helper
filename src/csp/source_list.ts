/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-serialized-source-list
 */
export function serializeSourceList(items: Iterable<string>): string {
    const itemsArray = Array.isArray(items) ? items : Array.from(items);
    const value = itemsArray.join(' ');
    return value;
}
