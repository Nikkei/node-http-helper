/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 *
 *  @see
 *      - https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
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

//////// https://www.rfc-editor.org/rfc/rfc9110.html#name-redirection-3xx

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-300-multiple-choices
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300
 */
export const MULTIPLE_CHOICES_300 = 300;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-301-moved-permanently
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301
 */
export const MOVED_PERMANENTLY_301 = 301;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-302-found
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
 */
export const FOUND_302 = 302;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-303-see-other
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
 */
export const SEE_OTHER_303 = 303;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-304-not-modified
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
 */
export const NOT_MODIFIED_304 = 304;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-305-use-proxy
 */
export const USE_PROXY_305 = 305;

// We don't define 306 because it's resereved code and is not used in the current spec. We don't define it.
//  - https://www.rfc-editor.org/rfc/rfc9110.html#name-306-unused

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-307-temporary-redirect
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
 */
export const TEMPORARY_REDIRECT_307 = 307;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-308-permanent-redirect
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308
 */
export const PERMANENT_REDIRECT_308 = 308;

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

/**
 *  - https://www.rfc-editor.org/rfc/rfc6585.html#section-3
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
 */
export const PRECONDITION_REQUIRED_428 = 428;

/**
 *  - https://www.rfc-editor.org/rfc/rfc6585.html#section-4
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
export const TOO_MANY_REQUESTS_429 = 429;

/**
 *  - https://www.rfc-editor.org/rfc/rfc6585#section-5
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE_431 = 431;

//////// https://www.rfc-editor.org/rfc/rfc9110.html#name-server-error-5xx

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-500-internal-server-error
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
 */
export const INTERNAL_SERVER_ERROR_500 = 500;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-501-not-implemented
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 */
export const NOT_IMPLEMENTED_501 = 501;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-502-bad-gateway
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
 */
export const BAD_GATEWAY_502 = 502;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-503-service-unavailable
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
 */
export const SERVICE_UNAVAILABLE_503 = 503;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-504-gateway-timeout
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
 */
export const GATEWAY_TIMEOUT_504 = 504;
/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-505-http-version-not-suppor
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 */
export const HTTP_VERSION_NOT_SUPPORTED_505 = 505;

/**
 *  - https://www.rfc-editor.org/rfc/rfc6585.html#section-6
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
 */
export const NETWORK_AUTHENTICATION_REQUIRED_511 = 511;

/**
 * @param code
 *  The http status code.
 * @returns
 *  This will be `true` if the _code_ is in the range of [1xx][1xx].
 *  Otherwise, return `false`.
 *
 *  [1xx]: https://httpwg.org/specs/rfc9110.html#status.1xx
 */
export function isInformational1xx(code: number): boolean {
    const ok = 100 <= code && code < 200;
    return ok;
}

/**
 * @param code
 *  The http status code.
 * @returns
 *  This will be `true` if the _code_ is in the range of [2xx][2xx].
 *  Otherwise, return `false`.
 *
 *  [2xx]: https://httpwg.org/specs/rfc9110.html#status.2xx
 */
export function isSuccessful2xx(code: number): boolean {
    const ok = 200 <= code && code < 300;
    return ok;
}

/**
 * @param code
 *  The http status code.
 * @returns
 *  This will be `true` if the _code_ is in the range of [3xx][3xx].
 *  Otherwise, return `false`.
 *
 *  [3xx]: https://httpwg.org/specs/rfc9110.html#status.3xx
 */
export function isRedirection3xx(code: number): boolean {
    const ok = 300 <= code && code < 400;
    return ok;
}

/**
 * @param code
 *  The http status code.
 * @returns
 *  This will be `true` if the _code_ is in the range of [4xx][4xx].
 *  Otherwise, return `false`.
 *
 *  [4xx]: https://httpwg.org/specs/rfc9110.html#status.4xx
 */
export function isClientError4xx(code: number): boolean {
    const ok = 400 <= code && code < 500;
    return ok;
}

/**
 * @param code
 *  The http status code.
 * @returns
 *  This will be `true` if the _code_ is in the range of [5xx][5xx].
 *  Otherwise, return `false`.
 *
 *  [5xx]: https://httpwg.org/specs/rfc9110.html#status.5xx
 */
export function isServerError5xx(code: number): boolean {
    const ok = 500 <= code && code < 600;
    return ok;
}
