/**
 *  https://w3c.github.io/webappsec-csp/#directives-navigation
 */
import { type SerializedDirective } from './serialize.js';

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-form-action
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/form-action
 */
export const DIRECTIVE_FORM_ACTION = 'form-action';
export type FormActionDirective = SerializedDirective<typeof DIRECTIVE_FORM_ACTION>;

/**
 *  - https://w3c.github.io/webappsec-csp/#directive-frame-ancestors
 *  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
 */
export const DIRECTIVE_FRAME_ANCESTORS = 'frame-ancestors';
export type FrameAncestorsDirective = SerializedDirective<typeof DIRECTIVE_FRAME_ANCESTORS>;

// https://w3c.github.io/webappsec-csp/#directive-navigate-to
// We think there is no implementation of this directive by MDN
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/navigate-to
