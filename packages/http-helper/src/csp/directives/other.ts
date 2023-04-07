/**
 *  https://w3c.github.io/webappsec-csp/#directives-other
 */

import type { SerializedDirective } from './serialize.js';

// https://w3c.github.io/webappsec-csp/#directive-webrtc
// We think there is no implementation of this directive by MDN
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-worker-src
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src
 */
export const DIRECTIVE_WORKER_SRC = 'worker-src';
export type WorkerSrcDirective = SerializedDirective<typeof DIRECTIVE_WORKER_SRC>;
