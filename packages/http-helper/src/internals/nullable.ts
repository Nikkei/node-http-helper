export type NotNull<T> = T extends null ? never : T;

// Ideally, probably it might be better to make this `NotNull<T> | null`.
// But we keep this type simple to interoperable with others
// (3rd party libraries, exist code, or a returned value type of buitin types')
// to allow to assign to a value typed as this directly.
export type Nullable<T> = T | null;

export function isNotNull<T>(input: Nullable<T>): input is NotNull<T> {
    return input !== null;
}

export function isNull<T>(input: Nullable<T>): input is null {
    return input === null;
}
