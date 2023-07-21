//  @see
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode
//  - https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-mode-header
//  - https://fetch.spec.whatwg.org/#concept-request-mode

export const CORS = 'cors' as const;
export const NAVIGATE = 'navigate' as const;
export const NO_CORS = 'no-cors' as const;
export const SAME_ORIGIN = 'same-origin' as const;
export const WEBSOCKET = 'websocket' as const;
