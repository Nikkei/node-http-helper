export const SOURCE_NONE = `'none'`;

/**
 *  - https://w3c.github.io/webappsec-csp/#grammardef-serialized-source-list
 *  - https://w3c.github.io/webappsec-csp/#grammardef-source-expression
 */
export type SourceExpression =
    | SchemeSource
    | HostSource
    | KeywordSource
    | NonceSource
    | HashSource
    | typeof SOURCE_NONE;

/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-scheme-source
 */
export type SchemeSource = `${string}:`;
export function schemeSource(scheme: string): SchemeSource {
    if (scheme.endsWith(':')) {
        throw new Error(`scheme should not be ends with :, but the actual is ${scheme}`);
    }

    const value: SchemeSource = `${scheme}:`;
    return value;
}

declare const HostSourceMarker: unique symbol;
/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-host-source
 */
export type HostSource = string & { readonly [HostSourceMarker]: unknown };
export function hostSource(host: string): HostSource {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Cheat to do nominal typing.
    return host as any;
}

export const SOURCE_SELF = "'self'";
export const SOURCE_UNSAFE_INLINE = "'unsafe-inline'";
export const SOURCE_UNSAFE_EVAL = "'unsafe-eval'";
export const SOURCE_STRICT_DYNAMIC = "'strict-dynamic'";
export const SOURCE_UNSAFE_HASHES = "'unsafe-hashes'";
export const SOURCE_REPORT_SAMPLE = "'report-sample'";
export const SOURCE_ALLOW_REDIRECTS = "'unsafe-allow-redirects'";
export const SOURCE_WASM_UNSAFE_EVAL = "'wasm-unsafe-eval'";

/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-keyword-source
 */
export type KeywordSource =
    | typeof SOURCE_SELF
    | typeof SOURCE_UNSAFE_INLINE
    | typeof SOURCE_UNSAFE_EVAL
    | typeof SOURCE_STRICT_DYNAMIC
    | typeof SOURCE_UNSAFE_HASHES
    | typeof SOURCE_REPORT_SAMPLE
    | typeof SOURCE_ALLOW_REDIRECTS
    | typeof SOURCE_WASM_UNSAFE_EVAL;

/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-nonce-source
 */
export type NonceSource = `'nonce-${string}'`;
export function nonceSource(base64Value: string): NonceSource {
    const value: NonceSource = `'nonce-${base64Value}'`;
    return value;
}

type HashSourceAlgorithm = 'sha256' | 'sha384' | 'sha512';
/**
 *  https://w3c.github.io/webappsec-csp/#grammardef-hash-source
 */
export type HashSource = `'${HashSourceAlgorithm}-${string}'`;
export function hashSource(algorithm: HashSourceAlgorithm, base64Value: string): HashSource {
    const value: HashSource = `'${algorithm}-${base64Value}'`;
    return value;
}

declare const URIReferenceMarker: unique symbol;
/**
 *  See https://datatracker.ietf.org/doc/html/rfc3986#section-4.1
 */
export type URIReference = string & { readonly [URIReferenceMarker]: unknown };

export function uriReference(value: string): URIReference {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Cheat to do nominal typing.
    return value as any;
}
