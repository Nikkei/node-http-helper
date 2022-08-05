/**
 *  https://w3c.github.io/webappsec-csp/#directives-document
 */
import { type SerializedDirective } from './serialize.js';

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-base-uri
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri
 */
export const DIRECTIVE_BASE_URI = 'base-uri';
export type BaseUriDirective = SerializedDirective<typeof DIRECTIVE_BASE_URI>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-sandbox
 *      - https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox
 */
export const DIRECTIVE_SANDBOX = 'sandbox';
export type SandboxDirective = SerializedDirective<typeof DIRECTIVE_SANDBOX>;
