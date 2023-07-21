// @see
//  - https://w3c.github.io/webappsec-clear-site-data/
//  - https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Clear-Site-Data

/**
 *  https://w3c.github.io/webappsec-clear-site-data/#grammardef-cache
 */
export const CACHE = '"cache"' as const;

/**
 *  https://w3c.github.io/webappsec-clear-site-data/#grammardef-cookies
 */
export const COOKIES = '"cookies"' as const;

/**
 * https://w3c.github.io/webappsec-clear-site-data/#grammardef-storage
 */
export const STORAGE = '"storage" ' as const;

// FIXME: We don't implement this value because there is no implementation.
// https://w3c.github.io/webappsec-clear-site-data/#grammardef-executioncontexts

// FIXME: We don't implement this value because there is no implementation.
// https://w3c.github.io/webappsec-clear-site-data/#grammardef-clienthints

/**
 *  https://w3c.github.io/webappsec-clear-site-data/#grammardef-
 */
export const WILDCARD = '"*"' as const;

/**
 *  @see
 *  - https://w3c.github.io/webappsec-clear-site-data/#header
 *  - https://datatracker.ietf.org/doc/html/rfc7230#section-7
 *
 *  @throws {RangeError}
 *      1. This throws if the caller calls without any arguments. Then the caller does not have to use this.
 *      2. The arguments contains the wildcard value. Then the caller does not have to use this.
 */
export function buildValue(...items: Array<string>): string {
    if (items.length <= 0) {
        throw new RangeError('items are empty. Please specify some values');
    }

    if (items.length > 1) {
        if (items.some(isWildcard)) {
            throw new RangeError(`directives contains \`${WILDCARD}\`. Please use only it.`);
        }
    }

    const value = items.join(', ');
    return value;
}

function isWildcard(value: string): boolean {
    const ok = value === WILDCARD;
    return ok;
}
