import { serializeSourceList } from '../source_list.js';

/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-serialized-directive
 */
export type SerializedDirective<TName extends string> = `${TName} ${string}`;

export function serializeDirective<TName extends string>(
    name: TName,
    sources: Iterable<string>
): SerializedDirective<TName> {
    if (typeof sources === 'string' || sources instanceof String) {
        throw new TypeError(`sources must not be string.`);
    }

    const sourceList = Array.isArray(sources) ? sources : Array.from(sources);
    const sourceListStr = serializeSourceList(sourceList);
    const result: SerializedDirective<TName> = `${name} ${sourceListStr}`;
    return result;
}
