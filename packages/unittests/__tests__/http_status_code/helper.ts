import { assert } from 'vitest';

export function assertNoOverlap(a: ReadonlySet<number>, b: ReadonlySet<number>): void {
    const ok = a.isDisjointFrom(b);
    if (!ok) {
        // we want to avoid to iterate sets multiple times....
        const overlapping = a.intersection(b);
        assert(false, `test cases have overlap point. They are: ${Array.from(overlapping)}`);
    }
}

const RANGE_BEGIN = 0;
// We believe the community does not inroduce new status code range over 999.
const RANGE_END = 999;

export function assertNoLackPatterns(...ranges: Array<ReadonlySet<number>>): void {
    const base = new Set(testRange(RANGE_BEGIN, RANGE_END));
    let differ = base;
    for (const range of ranges) {
        differ = differ.difference(range);
    }
    const noDifference = differ.size === 0;
    if (!noDifference) {
        assert(false, `There are missing spans: ${Array.from(differ)}`);
    }
}

function* testRange(begin: number, end: number): Generator<number> {
    assert(begin <= end);

    for (let i = begin; i <= end; ++i) {
        yield i;
    }
}

export function* validRange(begin: number, end: number): Generator<number> {
    yield* testRange(begin, end);
}

export function* invalidRangeFrom0To(end: number): Generator<number> {
    yield* testRange(RANGE_BEGIN, end);
}

export function* invalidRangeToEndFrom(begin: number): Generator<number> {
    yield* testRange(begin, RANGE_END);
}
