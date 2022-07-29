/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 */

//////// https://www.rfc-editor.org/rfc/rfc9110.html#name-informational-1xx

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-100-continue
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100
 */
export const CONTINUE_100 = 100;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-101-switching-protocols
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
 */
export const SWITCHING_PROTOCOLS_101 = 101;

//////// https://www.rfc-editor.org/rfc/rfc9110.html#name-successful-2xx

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-200-ok
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
 */
export const OK_200 = 200;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-201-created
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
 */
export const CREATED_201 = 201;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-202-accepted
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202
 */
export const ACCEPTED_202 = 202;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-203-non-authoritative-infor
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203
 */
export const NON_AUTHORITATIVE_INFORMATION_203 = 203;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-204-no-content
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
 */
export const NO_CONTENT_204 = 204;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-205-reset-content
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205
 */
export const RESET_CONTENT_205 = 205;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-206-partial-content
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206
 */
export const PARTIAL_CONTENT_206 = 206;
