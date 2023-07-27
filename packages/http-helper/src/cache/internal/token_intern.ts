// XXX: DO NOT EXPOSE THESE DIRECTLY.
//
// At least TypeScript v5.1, we need to assignment an another variable
// to provide an another JSDoc information for variables.
// `export { A as B }` cannot provide a different JSDoc info.
//
// Please assign to an another variable once before exporting as an user facing feature.
export const TOKEN_IMMUTABLE = 'immutable' as const;
export const TOKEN_MAX_AGE = 'max-age' as const;
export const TOKEN_MAX_STALE = 'max-stale' as const;
export const TOKEN_MIN_FRESH = 'min-fresh' as const;
export const TOKEN_MUST_REVALIDATE = 'must-revalidate' as const;
export const TOKEN_MUST_UNDERSTAND = 'must-understand' as const;
export const TOKEN_NO_CACHE = 'no-cache' as const;
export const TOKEN_NO_STORE = 'no-store' as const;
export const TOKEN_NO_TRANSFORM = 'no-transform' as const;
export const TOKEN_ONLY_IF_CACHED = 'only-if-cached' as const;
export const TOKEN_PRIVATE = 'private' as const;
export const TOKEN_PROXY_REVALIDATE = 'proxy-revalidate' as const;
export const TOKEN_PUBLIC = 'public' as const;
export const TOKEN_S_MAXAGE = 's-maxage' as const;
export const TOKEN_STALE_IF_ERROR = 'stale-if-error' as const;
export const TOKEN_STALE_WHILE_REVALIDATE = 'stale-while-revalidate' as const;
