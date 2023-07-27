export function assertIsInteger(value: number): asserts value {
    if (!Number.isSafeInteger(value)) {
        throw new TypeError(`value should be safe integer but ${value}`);
    }
}

export function assertIsNotNegative(value: number): asserts value {
    if (value < 0) {
        throw new RangeError(`value should be >= 0 but ${value}`);
    }
}
