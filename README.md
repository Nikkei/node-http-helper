# `@nikkei/http-helper`

This package provides constants and utility for well-known http values defined in various specs.

## Design Goals

-   **ES Module support as Tier 1**
    -   This allows us tree shaking friendly.
-   **TypeScript friendly APIs**
-   **Easy to replacement**.
    -   This does not aim to framework lock-in.
    -   This allows to replace your codebase incrementally.
-   **Well documented for related specs**

## Not Goals

We'd like to keep this as a _helper_ which you can replace easily.
So we don't aim following goals.

-   **Comprehensive wrapper for some specific framework.**
-   **Hard to migrate from/to this package.**
