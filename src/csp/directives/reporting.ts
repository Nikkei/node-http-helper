/**
 *  https://w3c.github.io/webappsec-csp/#directives-reporting
 */

import type { SerializedDirective } from './serialize.js';

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-report-uri
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri
 */
export const DIRECTIVE_REPORT_URI = 'report-uri';
export type ReportURIDirective = SerializedDirective<typeof DIRECTIVE_REPORT_URI>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-report-to
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to
 */
export const DIRECTIVE_REPORT_TO = 'report-to';
export type ReportToDirective = SerializedDirective<typeof DIRECTIVE_REPORT_TO>;
