/**
 *  - We don't use TypeScript enum for constants defined in this module to make them tree-shaking friendly.
 *  - This module should only contain well known http header field name values.
 */

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
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary
 *  - https://www.rfc-editor.org/rfc/rfc9110.html#field.vary
 */
export const VARY = 'vary';
