#!/usr/bin/env zx
import 'zx/globals';

const CWD = process.cwd();

await Promise.all([
    // @prettier-ignore
    $`rm -rf ${CWD}/__dist/`,
    $`rm -rf ${CWD}/tsconfig.tsbuildinfo`,
]);
