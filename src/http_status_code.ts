/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 *
 *  @see
 *      - https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 */

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

//////// https://www.rfc-editor.org/rfc/rfc9110.html#name-client-error-4xx

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-400-bad-request
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
export const BAD_REQUEST_400 = 400;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-401-unauthorized
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 */
export const UNAUTHORIZED_401 = 401;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-402-payment-required
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402
 */
export const PAYMENT_REQUIRED_402 = 402;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-403-forbidden
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
 */
export const FORBIDDEN_403 = 403;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-404-not-found
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
 */
export const NOT_FOUND_404 = 404;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-405-method-not-allowed
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
 */
export const METHOD_NOT_ALLOWED_405 = 405;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-406-not-acceptable
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
 */
export const NOT_ACCEPTABLE_406 = 406;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-407-proxy-authentication-re
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
 */
export const PROXY_AUTHENTICATION_REQUIRED_407 = 407;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-408-request-timeout
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
 */
export const REQUEST_TIMEOUT_408 = 408;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-409-conflict
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */
export const CONFLICT_409 = 409;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-410-gone
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
 */
export const GONE_410 = 410;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-411-length-required
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
 */
export const LENGTH_REQUIRED_411 = 411;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-412-precondition-failed
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
 */
export const PRECONDITION_FAILED_412 = 412;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-413-content-too-large
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
 */
export const CONTENT_TOO_LARGE_413 = 413;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-414-uri-too-long
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
 */
export const URI_TOO_LONG_414 = 414;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-415-unsupported-media-type
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
 */
export const UNSUPPORTED_MEDIA_TYPE_415 = 415;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-416-range-not-satisfiable
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
export const RANGE_NOT_SATISFIABLE_416 = 416;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-417-expectation-failed
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
 */
export const EXPECTATION_FAILED_417 = 417;

// We don't define 418 because it's resereved code. We don't use it.
//  - https://www.rfc-editor.org/rfc/rfc9110.html#name-418-unused
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-421-misdirected-request
 */
export const MISDIRECTED_REQUEST_421 = 421;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-422-unprocessable-content
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
 */
export const UNPROCESSABLE_CONTENT_422 = 422;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-426-upgrade-required
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
 */
export const UPGRADE_REQUIRED_426 = 426;
