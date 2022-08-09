import { type Nullable, isNotNull } from 'option-t/Nullable/Nullable';

/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-serialized-source-list
 */
export function serializeSourceList(items: Iterable<Nullable<string>>): string {
    const itemsArray = Array.isArray(items) ? items : Array.from(items);
    const nonNull = itemsArray.filter(isNotNull);
    const value = nonNull.join(' ');
    return value;
}
