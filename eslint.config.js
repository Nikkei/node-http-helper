import js from '@eslint/js';
import tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import tsESLintParser from '@typescript-eslint/parser';

import presets from 'eslint-config-prettier';
import globals from 'globals';

const ecmaVersion = 2022;

// See @typescript-eslint/eslint-plugin/dist/configs/eslint-recommended.js
const tsESLintPresetsESLintRecommendedRules = tsESLintPlugin.configs['eslint-recommended'].overrides[0].rules;
// See @typescript-eslint/eslint-plugin/dist/configs/recommended.js
const tsESLintPresetsRecommendedRules = tsESLintPlugin.configs.recommended.rules;

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
    {
        files: [
            // @prettier-ignore
            '**/*.ts',
            '**/*.mts',
            '**/*.cts',
        ],
        plugins: {
            '@typescript-eslint': tsESLintPlugin,
        },
        languageOptions: {
            parser: tsESLintParser,
            sourceType: 'module',
            globals: {
                ...globals.builtin,
            },
        },
        rules: {
            // For legacy config, `recommended` presets extends `eslint-recommended` automatically.
            // But this is new (flat) config. We need extends rules by hand.
            ...tsESLintPresetsESLintRecommendedRules,
            ...tsESLintPresetsRecommendedRules,

            ...prettierRules,

            '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
            '@typescript-eslint/no-redeclare': 'error',

            // We would like to sort the import styles.
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                {
                    prefer: 'type-imports',
                },
            ],
            // We want to make typescript's import erasure behavior consistently.
            // by enabling `--verbatimModuleSyntax` option.
            '@typescript-eslint/no-import-type-side-effects': 'warn',
        },
    },
];
