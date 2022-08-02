/**
 *  https://datatracker.ietf.org/doc/html/rfc6750
 */
const BEARER_AUTH_SCHEME = 'Bearer';

export type BearerSchemeValue = `${typeof BEARER_AUTH_SCHEME} ${string}`;

export function bearerAuthValue(token: string): BearerSchemeValue {
    const r: BearerSchemeValue = `${BEARER_AUTH_SCHEME} ${token}`;
    return r;
}
