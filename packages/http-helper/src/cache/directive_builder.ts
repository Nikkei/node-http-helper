import { assertIsInteger, assertIsNotNegative } from './internal/check_digit.js';
import { MAX_STALE, MIN_FRESH } from './request_directive.js';
import { MAX_AGE, STALE_IF_ERROR, STALE_WHILE_REVALIDATE, S_MAXAGE } from './response_directive.js';

/**
 *  @see
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-age
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-age-2
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#max-age
 *
 *  @throws {TypeError}
 *      The argument is not safe integer. It's not spec compatible.
 *  @throws {RangeError}
 *      The argument is < 0. It's not spec compatible.
 */
export function maxAge(seconds: number) {
    // See
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-5.2.1.1-1
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-1.2.2
    assertIsNotNegative(seconds);
    assertIsInteger(seconds);

    return buildKeyValue(MAX_AGE, seconds);
}

/**
 *  @see
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-stale
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#max-stale
 *
 *  @throws {TypeError}
 *      The argument is not safe integer. It's not spec compatible.
 *  @throws {RangeError}
 *      The argument is < 0. It's not spec compatible.
 */
export function maxStale(seconds: number) {
    // See
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-5.2.1.1-1
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-1.2.2
    assertIsNotNegative(seconds);
    assertIsInteger(seconds);

    return buildKeyValue(MAX_STALE, seconds);
}

/**
 *  @see
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-min-fresh
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#min-fresh
 *
 *  @throws {TypeError}
 *      The argument is not safe integer. It's not spec compatible.
 *  @throws {RangeError}
 *      The argument is < 0. It's not spec compatible.
 */
export function minFresh(seconds: number) {
    // See
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-5.2.1.1-1
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-1.2.2
    assertIsNotNegative(seconds);
    assertIsInteger(seconds);

    return buildKeyValue(MIN_FRESH, seconds);
}

/**
 *  @see
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-s-maxage
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#s-maxage
 *
 *  @throws {TypeError}
 *      The argument is not safe integer. It's not spec compatible.
 *  @throws {RangeError}
 *      The argument is < 0. It's not spec compatible.
 */
export function sMaxAge(seconds: number) {
    // See
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-5.2.1.1-1
    //  - https://www.rfc-editor.org/rfc/rfc9111#section-1.2.2
    assertIsNotNegative(seconds);
    assertIsInteger(seconds);

    return buildKeyValue(S_MAXAGE, seconds);
}

/**
 *  @see
 *  - https://datatracker.ietf.org/doc/html/rfc5861#page-3
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error
 *
 *  @throws {TypeError}
 *      The argument is not safe integer. It's not spec compatible.
 *  @throws {RangeError}
 *      The argument is < 0. It's not spec compatible.
 */
export function staleIfError(seconds: number) {
    // See
    // https://datatracker.ietf.org/doc/html/rfc2616#section-3.3.2
    // https://datatracker.ietf.org/doc/html/rfc5861#section-4.1
    assertIsNotNegative(seconds);
    assertIsInteger(seconds);

    return buildKeyValue(STALE_IF_ERROR, seconds);
}

/**
 *  @see
 *  - https://datatracker.ietf.org/doc/html/rfc5861#section-3
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate
 *
 *  @throws {TypeError}
 *      The argument is not safe integer. It's not spec compatible.
 *  @throws {RangeError}
 *      The argument is < 0. It's not spec compatible.
 */
export function staleWhileRevalidate(seconds: number) {
    // See
    // https://datatracker.ietf.org/doc/html/rfc2616#section-3.3.2
    // https://datatracker.ietf.org/doc/html/rfc5861#section-3.1
    assertIsNotNegative(seconds);
    assertIsInteger(seconds);

    return buildKeyValue(STALE_WHILE_REVALIDATE, seconds);
}

function buildKeyValue<const TDirName extends string>(key: TDirName, numericValue: number): `${TDirName}=${string}` {
    return `${key}=${String(numericValue)}`;
}
