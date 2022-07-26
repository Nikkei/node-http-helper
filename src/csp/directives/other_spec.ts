/**
 *  https://w3c.github.io/webappsec-csp/#directives-elsewhere
 */

/**
 *  [`block-all-mixed-content` directive](https://www.w3.org/TR/mixed-content/#strict-checking) is obsoleted in
 *  [Mixed Content spec](https://www.w3.org/TR/mixed-content/#strict-checking).
 *
 *  So we don't implement it.
 */

/**
 *  See
 *  - https://w3c.github.io/webappsec-csp/#directives-elsewhere
 *      - https://w3c.github.io/webappsec-upgrade-insecure-requests/#delivery
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
 */
export const DIRECTIVE_UPGRADE_INSECURE_REQUESTS = 'upgrade-insecure-requests';
export type UpgradeInsecureRequestsDirective = typeof DIRECTIVE_UPGRADE_INSECURE_REQUESTS;
