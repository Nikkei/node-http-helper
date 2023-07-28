//  @see
//  - https://www.rfc-editor.org/rfc/rfc9111.html#name-response-directives
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#response_directives
import {
    TOKEN_IMMUTABLE,
    TOKEN_MAX_AGE,
    TOKEN_MUST_REVALIDATE,
    TOKEN_MUST_UNDERSTAND,
    TOKEN_NO_CACHE,
    TOKEN_NO_STORE,
    TOKEN_NO_TRANSFORM,
    TOKEN_PRIVATE,
    TOKEN_PROXY_REVALIDATE,
    TOKEN_PUBLIC,
    TOKEN_STALE_IF_ERROR,
    TOKEN_STALE_WHILE_REVALIDATE,
    TOKEN_S_MAXAGE,
} from './internal/token_intern.js';

/**
 *  - https://datatracker.ietf.org/doc/rfc8246/
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#immutable
 */
export const IMMUTABLE = TOKEN_IMMUTABLE;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-max-age-2
 */
export const MAX_AGE = TOKEN_MAX_AGE;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-must-revalidate
 */
export const MUST_REVALIDATE = TOKEN_MUST_REVALIDATE;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-must-understand
 */
export const MUST_UNDERSTAND = TOKEN_MUST_UNDERSTAND;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-no-cache-2
 */
export const NO_CACHE = TOKEN_NO_CACHE;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-no-store-2
 */
export const NO_STORE = TOKEN_NO_STORE;

/**
 * https://www.rfc-editor.org/rfc/rfc9111.html#name-no-transform-2
 */
export const NO_TRANSFORM = TOKEN_NO_TRANSFORM;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-private
 */
export const PRIVATE = TOKEN_PRIVATE;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-proxy-revalidate
 */
export const PROXY_REVALIDATE = TOKEN_PROXY_REVALIDATE;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-public
 */
export const PUBLIC = TOKEN_PUBLIC;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-s-maxage
 */
export const S_MAXAGE = TOKEN_S_MAXAGE;

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error
 *  - https://datatracker.ietf.org/doc/rfc5861/
 */
export const STALE_IF_ERROR = TOKEN_STALE_IF_ERROR;

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate
 *  - https://datatracker.ietf.org/doc/rfc5861/
 */
export const STALE_WHILE_REVALIDATE = TOKEN_STALE_WHILE_REVALIDATE;
