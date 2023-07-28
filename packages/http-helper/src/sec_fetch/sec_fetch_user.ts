// @see
// - https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-user-header
// - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User
// - https://www.rfc-editor.org/rfc/rfc8941.html

import { SF_BOOLEAN_TRUE } from '../internals/structured_field_value/boolean.js';

/**
 *  By the spec, this value should be boolean `true` of structured field values format.
 *  - https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-user-header
 *  - https://www.rfc-editor.org/rfc/rfc8941.html#name-booleans
 */
export const TRUE = SF_BOOLEAN_TRUE;
