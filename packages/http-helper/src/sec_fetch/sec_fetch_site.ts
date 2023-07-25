//  @see
//  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site
//  - https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-site-header

export const CROSS_SITE = 'cross-site' as const;
export const SAME_ORIGIN = 'same-origin' as const;
export const SAME_SITE = 'same-site' as const;
export const NONE = 'none' as const;
