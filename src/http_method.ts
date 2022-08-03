/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 *  - This module should only contain well known http header field name values.
 *
 *  @see    https://www.rfc-editor.org/rfc/rfc9110.html#name-methods
 */

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#GET
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 */
export const GET = 'GET';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-head
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
 */
export const HEAD = 'HEAD';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-post
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
 */
export const POST = 'POST';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-put
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT
 */
export const PUT = 'PUT';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-delete
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE
 */
export const DELETE = 'DELETE';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-connect
 */
export const CONNECT = 'CONNECT';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-options
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
 */
export const OPTIONS = 'OPTIONS';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-trace
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE
 */
export const TRACE = 'TRACE';

/**
 *  - https://www.rfc-editor.org/rfc/rfc5789
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
 */
export const PATCH = 'PATCH';
