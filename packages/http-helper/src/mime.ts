/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 *  - This module should only contain well known http header field name values.
 *
 *  @see
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *  - https://datatracker.ietf.org/doc/html/rfc6838
 *  - https://www.iana.org/assignments/media-types/media-types.xhtml
 */
const CHARSET_UTF_8 = 'charset=utf-8';

/**
 *  - https://www.iana.org/assignments/media-types/application/json
 *  - https://datatracker.ietf.org/doc/html/rfc8259
 */
export const APPLICATION_JSON = 'application/json';

/**
 *  - https://www.iana.org/assignments/media-types/application/x-www-form-urlencoded
 *  - https://url.spec.whatwg.org/#application/x-www-form-urlencoded
 */
export const APPLICATION_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded';

/**
 *  - https://www.iana.org/assignments/media-types/multipart/form-data
 *  - https://www.rfc-editor.org/rfc/rfc7578.html
 */
export const MULTIPART_FORM_DATA = 'multipart/form-data';

/**
 *  - https://www.iana.org/assignments/media-types/text/css
 */
export const TEXT_CSS = 'text/css';

/**
 *  - https://www.iana.org/assignments/media-types/text/csv
 */
export const TEXT_CSV = 'text/csv';
export const TEXT_CSV_UTF_8 = `${TEXT_CSV}; ${CHARSET_UTF_8}` as const;

/**
 *  - https://www.iana.org/assignments/media-types/text/javascript
 *  - https://www.rfc-editor.org/rfc/rfc9239.html
 */
export const TEXT_JAVASCRIPT = 'text/javascript';

/**
 *  - https://www.iana.org/assignments/media-types/text/html
 */
export const TEXT_HTML = 'text/html';
export const TEXT_HTML_UTF_8 = `${TEXT_HTML}; ${CHARSET_UTF_8}` as const;

export const TEXT_PLAIN = 'text/plain';
export const TEXT_PLAIN_UTF_8 = `${TEXT_PLAIN}; ${CHARSET_UTF_8}` as const;
