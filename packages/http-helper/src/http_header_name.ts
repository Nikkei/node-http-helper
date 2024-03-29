/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 *  - This module should only contain well known http header field name values.
 *
 *  @see
 *      - https://www.iana.org/assignments/http-fields/http-fields.xhtml
 */

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-accept
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
 */
export const ACCEPT = 'accept';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-accept-charset
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset
 */
export const ACCEPT_CHARSET = 'accept-charset';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-accept-encoding
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding
 */
export const ACCEPT_ENCODING = 'accept-encoding';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-accept-language
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
 */
export const ACCEPT_LANGUAGE = 'accept-language';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-accept-ranges
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges
 */
export const ACCEPT_RANGES = 'accept-ranges';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-allow-credentials
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
 */
export const ACCESS_CONTROL_ALLOW_CREDENTIALS = 'access-control-allow-credentials';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-allow-headers
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
 */
export const ACCESS_CONTROL_ALLOW_HEADERS = 'access-control-allow-headers';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-allow-methods
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
 */
export const ACCESS_CONTROL_ALLOW_METHODS = 'access-control-allow-methods';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-allow-origin
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 */
export const ACCESS_CONTROL_ALLOW_ORIGIN = 'access-control-allow-origin';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-expose-headers
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
 */
export const ACCESS_CONTROL_EXPOSE_HEADERS = 'access-control-expose-headers';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-max-age
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
 */
export const ACCESS_CONTROL_MAX_AGE = 'access-control-max-age';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-request-headers
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers
 */
export const ACCESS_CONTROL_REQUEST_HEADERS = 'access-control-request-headers';

/**
 *  - https://fetch.spec.whatwg.org/#http-access-control-request-method
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method
 */
export const ACCESS_CONTROL_REQUEST_METHOD = 'access-control-request-method';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-age
 */
export const AGE = 'age';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-allow
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow
 */
export const ALLOW = 'allow';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-authentication-info
 */
export const AUTHENTICATION_INFO = 'authentication-info';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-authorization
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization
 */
export const AUTHORIZATION = 'authorization';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-cache-control
 */
export const CACHE_CONTROL = 'cache-control';

/**
 *  https://www.rfc-editor.org/rfc/rfc9211#name-the-cache-status-http-respo
 */
export const CACHE_STATUS = 'cache-status';

/**
 *  - https://w3c.github.io/webappsec-clear-site-data/#header
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data
 */
export const CLEAR_SITE_DATA = 'clear-site-data';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-connection
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection
 */
export const CONNECTION = 'connection';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-content-encoding
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
 */
export const CONTENT_ENCODING = 'content-encoding';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-content-language
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language
 */
export const CONTENT_LANGUAGE = 'content-language';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-content-length
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length
 */
export const CONTENT_LENGTH = 'content-length';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-content-location
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location
 */
export const CONTENT_LOCATION = 'content-location';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-content-range
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range
 */
export const CONTENT_RANGE = 'content-range';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
 *  - https://w3c.github.io/webappsec-csp/#csp-header
 */
export const CONTENT_SECURITY_POLICY = 'content-security-policy';
/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
 *  - https://w3c.github.io/webappsec-csp/#cspro-header
 */
export const CONTENT_SECURITY_POLICY_REPORT_ONLY = 'content-security-policy-report-only';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-content-type
 */
export const CONTENT_TYPE = 'content-type';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
 *  - https://www.ietf.org/archive/id/draft-ietf-httpbis-rfc6265bis-10.html
 */
export const COOKIE = 'cookie';

/**
 *  - https://html.spec.whatwg.org/multipage/origin.html#coep
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
 */
export const CROSS_ORIGIN_EMBEDDER_POLICY = 'cross-origin-embedder-policy';

/**
 *  - https://html.spec.whatwg.org/multipage/origin.html#coep
 */
export const CROSS_ORIGIN_EMBEDDER_POLICY_REPORT_ONLY = 'cross-origin-embedder-policy-report-only';

/**
 *  - https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policies
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
 */
export const CROSS_ORIGIN_OPENER_POLICY = 'cross-origin-opener-policy';

/**
 *  - https://html.spec.whatwg.org/multipage/origin.html#cross-origin-opener-policies
 */
export const CROSS_ORIGIN_OPENER_POLICY_REPORT_ONLY = 'cross-origin-opener-policy-report-only';

/**
 *  - https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
 */
export const CROSS_ORIGIN_RESOURCE_POLICY = 'cross-origin-resource-policy';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-date
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date
 */
export const DATE = 'date';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-etag
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
 */
export const ETAG = 'etag';

/**
 *  @deprecated
 *  Use {@link ETAG} instead. This will be removed in a future release.
 */
export const ETag = ETAG;

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-expect
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect
 */
export const EXPECT = 'expect';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires
 *  - https://www.rfc-editor.org/rfc/rfc9111.html#name-expires
 */
export const EXPIRES = 'expires';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-from
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From
 */
export const FROM = 'from';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-host-and-authority
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host
 */
export const HOST = 'host';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-if-match
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match
 */
export const IF_MATCH = 'if-match';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-if-modified-since
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
 */
export const IF_MODIFIED_SINCE = 'if-modified-since';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-if-none-match
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match
 */
export const IF_NONE_MATCH = 'if-none-match';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-if-unmodified-since
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since
 */
export const IF_UNMODIFIED_SINCE = 'if-unmodified-since';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-if-range
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range
 */
export const IF_RANGE = 'if-range';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-last-modified
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified
 */
export const LAST_MODIFIED = 'last-modified';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-location
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location
 */
export const LOCATION = 'location';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-max-forwards
 */
export const MAX_FORWARDS = 'max-forwards';

/**
 *  - https://fetch.spec.whatwg.org/#origin-header
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin
 */
export const ORIGIN = 'origin';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-proxy-authenticate
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate
 */
export const PROXY_AUTHENTICATE = 'proxy-authenticate';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-proxy-authentication-info
 */
export const PROXY_AUTHENTICATION_INFO = 'proxy-authentication-info';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-proxy-authorization
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authorization
 */
export const PROXY_AUTHORIZATION = 'proxy-authorization';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-range
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range
 */
export const RANGE = 'range';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-referer
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer
 */
export const REFERER = 'referer';

/**
 *  - https://w3c.github.io/webappsec-referrer-policy/
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
 */
export const REFERRER_POLICY = 'referrer-policy';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-retry-after
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
 */
export const RETRY_AFTER = 'retry-after';

/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA
 */
export const SEC_CH_UA = 'sec-ch-ua';

/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-arch
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Arch
 */
export const SEC_CH_UA_ARCH = 'sec-ch-ua-arch';

/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-bitness
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness
 */
export const SEC_CH_UA_BITNESS = 'sec-ch-ua-bitness';

/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-full-version-list
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
 */
export const SEC_CH_UA_FULL_VERSION_LIST = 'sec-ch-ua-full-version-list';
/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-mobile
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile
 */
export const SEC_CH_UA_MOBILE = 'sec-ch-ua-mobile';
/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-model
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model
 */
export const SEC_CH_UA_MODEL = 'sec-ch-ua-model';
/**
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-platform
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform
 */
export const SEC_CH_UA_PLATFORM = 'sec-ch-ua-platform';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version
 *  - https://wicg.github.io/ua-client-hints/#sec-ch-ua-platform-version
 */
export const SEC_CH_UA_PLATFORM_VERSION = 'sec-ch-ua-platform-version';

/**
 *  XXX:
 *  https://wicg.github.io/ua-client-hints/#sec-ch-ua-wow64
 *  We think we don't have to implement `Sec-CH-UA-WoW64` because all major web engines have 64 bit support natively.
 *  We guess there is no requirement for this kind of information practically.
 */

/**
 *  - https://w3c.github.io/webappsec-fetch-metadata/#http-headerdef-sec-fetch-dest
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest
 */
export const SEC_FETCH_DEST = 'sec-fetch-dest';

/**
 *  - https://w3c.github.io/webappsec-fetch-metadata/#http-headerdef-sec-fetch-mode
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode
 */
export const SEC_FETCH_MODE = 'sec-fetch-mode';

/**
 *  - https://w3c.github.io/webappsec-fetch-metadata/#http-headerdef-sec-fetch-site
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site
 */
export const SEC_FETCH_SITE = 'sec-fetch-site';

/**
 *  - https://w3c.github.io/webappsec-fetch-metadata/#http-headerdef-sec-fetch-user
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User
 */
export const SEC_FETCH_USER = 'sec-fetch-user';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-server
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server
 */
export const SERVER = 'server';

/**
 *  - https://w3c.github.io/server-timing/#the-server-timing-header-field
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing
 */
export const SERVER_TIMING = 'server-timing';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
 *  - https://www.ietf.org/archive/id/draft-ietf-httpbis-rfc6265bis-10.html
 */
export const SET_COOKIE = 'set-cookie';

/**
 *  - https://www.rfc-editor.org/rfc/rfc6797.html
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
 */
export const STRICT_TRANSPORT_SECURITY = 'strict-transport-security';

/**
 *  - https://developer.fastly.com/reference/http/http-headers/Surrogate-Control/
 *
 *  See also:
 *      - https://www.rfc-editor.org/rfc/rfc9213
 */
export const SURROGATE_CONTROL = 'surrogate-control';

/**
 *  - https://developer.fastly.com/reference/http/http-headers/Surrogate-Key/
 */
export const SURROGATE_KEY = 'surrogate-key';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-te
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE
 */
export const TE = 'te';

/**
 *  - https://w3c.github.io/resource-timing/#sec-timing-allow-origin
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin
 */
export const TIMING_ALLOW_ORIGIN = 'timing-allow-origin';

/**
 *  - https://w3c.github.io/trace-context/#traceparent-header
 *      - https://www.w3.org/TR/trace-context-2/#traceparent-header
 */
export const TRACEPARENT = 'traceparent';

/**
 *  - https://www.w3.org/TR/trace-context-2/#tracestate-header
 *      - https://w3c.github.io/trace-context/#tracestate-header
 */
export const TRACESTATE = 'tracestate';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-trailer
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer
 */
export const TRAILER = 'trailer';

/**
 *  This field is specific to HTTP/1.1. **Disallowed in HTTP/2**.
 *
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-upgrade
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade
 */
export const UPGRADE = 'upgrade';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-user-agent
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
 */
export const USER_AGENT = 'user-agent';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-via
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via
 */
export const VIA = 'via';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#field.vary
 */
export const VARY = 'vary';

/**
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#name-www-authenticate
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate
 */
export const WWW_AUTHENTICATE = 'www-authenticate';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
 *  - https://fetch.spec.whatwg.org/#x-content-type-options-header
 */
export const X_CONTENT_TYPE_OPTIONS = 'x-content-type-options';

/**
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
 *  - https://www.rfc-editor.org/rfc/rfc7034
 */
export const X_FRAME_OPTIONS = 'x-frame-options';
