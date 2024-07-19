module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin', 'react-refresh', 'import'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:storybook/recommended',
        'plugin:import/recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    ignorePatterns: ['.eslintrc.js', 'dist'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreRestSiblings: true }
        ],
        'no-console': 'error',
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true
            }
        ],
        'import/newline-after-import': ['error', { count: 1 }],
        'import/order': ['error', { 'newlines-between': 'never' }]
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        }
    },
    overrides: [
        {
            files: ['**/*.stories.{ts,tsx}'],
            rules: {
                'import/no-default-export': 'off'
            }
        }
    ]
}
