/**
 *  @see
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-cache-control
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-collected-abnf
 *
 *  @throws {RangeError}
 *      This throws if the caller calls without any arguments.
 *      Then the caller does not have to use this.
 */
export function buildCacheControlValue(...items: Array<string>): string {
    if (items.length <= 0) {
        throw new RangeError(`items must be > 0`);
    }

    const result = items.join(', ');
    return result;
}
