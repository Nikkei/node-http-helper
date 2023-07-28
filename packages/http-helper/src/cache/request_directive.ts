//  @see
//  - https://www.rfc-editor.org/rfc/rfc9111.html#name-request-directives
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#request_directives
import {
    TOKEN_MAX_AGE,
    TOKEN_MAX_STALE,
    TOKEN_MIN_FRESH,
    TOKEN_NO_CACHE,
    TOKEN_NO_STORE,
    TOKEN_NO_TRANSFORM,
    TOKEN_ONLY_IF_CACHED,
    TOKEN_STALE_IF_ERROR,
} from './internal/token_intern.js';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-age
 */
export const MAX_AGE = TOKEN_MAX_AGE;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-stale
 */
export const MAX_STALE = TOKEN_MAX_STALE;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-min-fresh
 */
export const MIN_FRESH = TOKEN_MIN_FRESH;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-no-cache
 */
export const NO_CACHE = TOKEN_NO_CACHE;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-no-store
 */
export const NO_STORE = TOKEN_NO_STORE;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-no-transform
 */
export const NO_TRANSFORM = TOKEN_NO_TRANSFORM;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-only-if-cached
 */
export const ONLY_IF_CACHED = TOKEN_ONLY_IF_CACHED;

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error
 *  - https://datatracker.ietf.org/doc/rfc5861/
 */
export const STALE_IF_ERROR = TOKEN_STALE_IF_ERROR;
