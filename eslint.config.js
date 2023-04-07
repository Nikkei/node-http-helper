import js from '@eslint/js';
import presets from 'eslint-config-prettier';
import globals from 'globals';

const ecmaVersion = 2022;

const prettierRules = Object.freeze({
    ...presets.rules,

    // This rule avoid the prettier's behavior which omits curly blacket for if statement by default like following:
    //
    //  before:
    //      ```js
    //          if (cond)
    //              bar();
    //      ```
    //  after:
    //      ```js
    //          if (cond) bar();
    //      ```
    //
    // We think it would better to enforce blacket for all statement block because:
    //  1. uniform coding style,
    //  2. make more solid & simple code style.
    // see also https://github.com/prettier/eslint-config-prettier#curly
    curly: ['error', 'all'],
});

// https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
export default [
    js.configs.recommended,
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        rules: {
            ...prettierRules,
            'no-unused-private-class-members': 'warn',
        },
    },
    {
        ignores: [
            // @prettier-ignore
            // Project-specific generated files
            '**/__dist/**/*',
            '**/__obj/**/*',
        ],
    },
    {
        files: ['**/*.mjs', '**/*.js'],
        languageOptions: {
            ecmaVersion,
            sourceType: 'module',
            globals: {
                ...globals.nodeBuiltin,
            },
        },
    },
    {
        files: ['**/*.cjs'],
        languageOptions: {
            ecmaVersion,
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.commonjs,
            },
        },
    },
];
