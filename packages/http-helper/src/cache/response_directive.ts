//  @see
//  - https://www.rfc-editor.org/rfc/rfc9111.html#name-response-directives
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#response_directives

/**
 *  - https://datatracker.ietf.org/doc/rfc8246/
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#immutable
 */
export const IMMUTABLE = 'immutable' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-max-age-2
 */
export const MAX_AGE = 'max-age' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-must-revalidate
 */
export const MUST_REVALIDATE = 'must-revalidate' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-must-understand
 */
export const MUST_UNDERSTAND = 'must-understand' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-no-cache-2
 */
export const NO_CACHE = 'no-cache' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-no-store-2
 */
export const NO_STORE = 'no-store' as const;

/**
 * https://www.rfc-editor.org/rfc/rfc9111.html#name-no-transform-2
 */
export const NO_TRANSFORM = 'no-transform' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-private
 */
export const PRIVATE = 'private' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-proxy-revalidate
 */
export const PROXY_REVALIDATE = 'proxy-revalidate' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-public
 */
export const PUBLIC = 'public' as const;

/**
 *  https://www.rfc-editor.org/rfc/rfc9111.html#name-s-maxage
 */
export const S_MAXAGE = 's-maxage' as const;

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-if-error
 *  - https://datatracker.ietf.org/doc/rfc5861/
 */
export const STALE_IF_ERROR = 'stale-if-error' as const;

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#stale-while-revalidate
 *  - https://datatracker.ietf.org/doc/rfc5861/
 */
export const STALE_WHILE_REVALIDATE = 'stale-while-revalidate' as const;
