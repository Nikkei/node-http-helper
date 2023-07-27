//  @see
//  - https://www.rfc-editor.org/rfc/rfc9111.html#name-request-directives
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#request_directives

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-age
 */
export const MAX_AGE = 'max-age' as const;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-max-stale
 */
export const MAX_STALE = 'max-stale' as const;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-min-fresh
 */
export const MIN_FRESH = 'min-fresh' as const;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-no-cache
 */
export const NO_CACHE = 'no-cache' as const;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-no-store
 */
export const NO_STORE = 'no-store' as const;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-no-transform
 */
export const NO_TRANSFORM = 'no-transform' as const;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-only-if-cached
 */
export const ONLY_IF_CACHED = 'only-if-cached' as const;

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error
 *  - https://datatracker.ietf.org/doc/rfc5861/
 */
export const STALE_IF_ERROR = 'stale-if-error' as const;
