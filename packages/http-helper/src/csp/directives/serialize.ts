import type { Nullable } from 'option-t/nullable/nullable';
import { serializeSourceList } from '../source_list.js';

/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-serialized-directive
 */
export type SerializedDirective<TName extends string> = `${TName} ${string}`;

export function serializeDirective<TName extends string>(
    name: TName,
    sources: Iterable<Nullable<string>>,
): SerializedDirective<TName> {
    if (typeof sources === 'string' || sources instanceof String) {
        throw new TypeError(`For ${name} construction, sources must not be string.`);
    }

    const sourceListStr = serializeSourceList(sources);
    const result: SerializedDirective<TName> = `${name} ${sourceListStr}`;
    return result;
}
